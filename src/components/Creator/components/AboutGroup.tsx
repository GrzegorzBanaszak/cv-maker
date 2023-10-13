import { FunctionComponent } from "react";
import RemoveIcon from "../../../icons/RemoveIcon";

const AboutGroup: FunctionComponent = () => {
  return (
    <div>
      <h2 className="mt-7 pb-2 text-3xl border-b-2 border-gray-200 flex justify-between items-center">
        O mnie
        <RemoveIcon />
      </h2>
      <textarea className="block border-2 border-gray-200 w-full mt-5 rounded-md h-22 resize-none h-32 p-2 focus:outline-none" />
    </div>
  );
};

export default AboutGroup;
