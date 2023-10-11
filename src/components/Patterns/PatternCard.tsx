import React from "react";
import { motion } from "framer-motion";
type PatternCardProps = {
  url: string;
  clickHandler: () => void;
};

const PatternCard: React.FunctionComponent<PatternCardProps> = ({
  url,
  clickHandler,
}) => {
  return (
    <motion.div
      className="w-1/4 hover:cursor-pointer shadow-md"
      whileHover={{ scale: 1.1 }}
      onClick={clickHandler}
    >
      <img
        src={new URL(`../../assets/${url}.jpg`, import.meta.url).href}
        alt="cv example"
      />
    </motion.div>
  );
};

export default PatternCard;
