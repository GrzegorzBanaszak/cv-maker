import jsPDF from "jspdf";
import { RefObject } from "react";

const handleGeneretPdf = (ref: RefObject<HTMLElement>) => {
  const doc = new jsPDF({
    format: "a4",
    unit: "px",
  });

  doc.setFont("Inter-Regular", "normal");

  doc.html(ref.current!, {
    async callback(doc) {
      doc.save("dock");
    },
  });
};

export { handleGeneretPdf };
