import { FunctionComponent } from "react";
import { motion } from "framer-motion";

interface Props {
  color?: string;
  isAnimated?: boolean;
}

const RemoveIcon: FunctionComponent<Props> = ({ isAnimated = false }) => {
  if (isAnimated) {
    return (
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        className="stroke-white cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 23C18.275 23 23 18.275 23 12.5C23 6.725 18.275 2 12.5 2C6.725 2 2 6.725 2 12.5C2 18.275 6.725 23 12.5 23Z"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9.52856 15.4715L15.4716 9.52855"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.4716 15.4715L9.52856 9.52855"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.svg>
    );
  }
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className="stroke-red-700 hover:stroke-red-500 ease-in duration-300 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 23C18.275 23 23 18.275 23 12.5C23 6.725 18.275 2 12.5 2C6.725 2 2 6.725 2 12.5C2 18.275 6.725 23 12.5 23Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.52856 15.4715L15.4716 9.52855"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4716 15.4715L9.52856 9.52855"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default RemoveIcon;
