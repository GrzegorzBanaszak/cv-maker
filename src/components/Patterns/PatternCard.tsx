import React from "react";
import { motion } from "framer-motion";
type PatternCardProps = {
  url: string;
};

const PatternCard: React.FunctionComponent<PatternCardProps> = ({ url }) => {
  return (
    <motion.div
      className="w-1/4 hover:cursor-pointer shadow-md"
      whileHover={{ scale: 1.1 }}
    >
      <img
        src={new URL(`../../assets/${url}.jpg`, import.meta.url).href}
        alt="cv example"
      />
    </motion.div>
  );
};

export default PatternCard;
