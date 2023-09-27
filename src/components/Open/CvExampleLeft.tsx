import React from "react";
import { motion } from "framer-motion";
type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const CvExampleLeft: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <motion.article
      whileHover={{
        scale: 1.7,
        transition: {
          duration: 0.7,
        },
      }}
      className="shadow-md rounded-sm bg-blue-950 text-white grow py-2 px-2 hover:cursor-pointer"
    >
      {children}
    </motion.article>
  );
};

export default CvExampleLeft;
