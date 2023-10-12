import { useState, FunctionComponent } from "react";
import CreatorSideIcon from "../../../icons/CreatorSideIcon";

const SideSelect: FunctionComponent = () => {
  const [selected, setSelected] = useState<string>("left");
  return (
    <div className="flex shadow-lg rounded-lg">
      <div
        className={`py-2 px-4 rounded-l-lg cursor-pointer ${
          selected === "left" ? "bg-indigo-950" : "white"
        }`}
        onClick={() => setSelected("left")}
      >
        <CreatorSideIcon
          type="type-1"
          color={selected === "left" ? "white" : "#1e1b4b"}
        />
      </div>
      <div
        className={`py-2 px-4 rounded-r-lg cursor-pointer ${
          selected === "right" ? "bg-indigo-950" : "white"
        }`}
        onClick={() => setSelected("right")}
      >
        <CreatorSideIcon
          type="type-2"
          color={selected === "right" ? "white" : "#1e1b4b"}
        />
      </div>
    </div>
  );
};

export default SideSelect;
