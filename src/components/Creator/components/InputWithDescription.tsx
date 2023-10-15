import { FunctionComponent, useState } from "react";
import RemoveIcon from "../../../icons/RemoveIcon";
import { motion } from "framer-motion";
import AddIcon from "../../../icons/AddIcon";

const InputWithDescription: FunctionComponent = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div>
      <h2 className="mt-7 pb-2 text-3xl border-b-2 border-gray-200 flex justify-between items-center">
        O mnie
        <div className="flex gap-1">
          <AddIcon />
          <RemoveIcon />
        </div>
      </h2>
      <div className="flex items-center mt-5">
        <div className="w-full">
          <textarea className="block border-2 border-gray-200 w-full  rounded-tl-md h-20 resize-none p-2 focus:outline-none m-0" />
          <textarea className="block border-2 border-gray-200 w-full  rounded-bl-md h-20 resize-none p-2 focus:outline-none m-0" />
        </div>

        <motion.div
          whileHover={{
            width: "4rem",
          }}
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className="bg-red-500 h-40 rounded-r-md cursor-pointer flex items-center justify-center w-6"
        >
          {isHover && <RemoveIcon isAnimated={true} />}
        </motion.div>
      </div>
    </div>
  );
};

export default InputWithDescription;
