import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const CvExamlpeRight: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <motion.article
      whileHover={{
        scale: 1.7,
        transition: {
          duration: 0.7,
        },
      }}
      className=" py-1 px-3 grow shadow-md rounded-sm bg-white hover:cursor-pointer"
    >
      {children}
    </motion.article>
  );
};

export default CvExamlpeRight;
