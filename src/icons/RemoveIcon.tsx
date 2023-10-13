import { FunctionComponent } from "react";
const RemoveIcon: FunctionComponent = () => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      className="stroke-gray-500 hover:stroke-red-500 !duration-150 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 23C18.275 23 23 18.275 23 12.5C23 6.725 18.275 2 12.5 2C6.725 2 2 6.725 2 12.5C2 18.275 6.725 23 12.5 23Z"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.52856 15.4715L15.4716 9.52855"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.4716 15.4715L9.52856 9.52855"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RemoveIcon;
