import { useRef } from "react";
import "./App.css";
import jsPDF from "jspdf";

function App() {
  const templeRef = useRef<HTMLDivElement>(null);

  const handleGeneretPdf = () => {
    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    doc.setFont("Inter-Regular", "normal");

    doc.html(templeRef.current!, {
      async callback(doc) {
        doc.save("dock");
      },
    });
  };
  return (
    <>
      <button onClick={handleGeneretPdf}>Save</button>
      <div ref={templeRef}>
        <h1 className="bg-slate-500">Hello pdf</h1>
      </div>
    </>
  );
}

export default App;
