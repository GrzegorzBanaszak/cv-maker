import { FunctionComponent } from "react";

const AddIcon: FunctionComponent = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className="stroke-green-700 cursor-pointer hover:stroke-green-500 ease-in duration-300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 23C18.275 23 23 18.275 23 12.5C23 6.725 18.275 2 12.5 2C6.725 2 2 6.725 2 12.5C2 18.275 6.725 23 12.5 23Z"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.30005 12.5H16.7"
        strokeWidth="3"
        strokeLinecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 16.7V8.3"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AddIcon;
