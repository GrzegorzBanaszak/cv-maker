import React from "react";

interface Props {
  type: string;
  color: string;
}

const CreatorSideIcon: React.FunctionComponent<Props> = ({ type, color }) => {
  switch (type) {
    case "type-1":
      return (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect stroke={color} x="0.5" y="0.5" width="13" height="19" />
          <rect fill={color} x="1" y="1" width="5" height="18" />
        </svg>
      );
    case "type-2":
      return (
        <svg
          width="14"
          height="20"
          viewBox="0 0 14 20"
          fill="none"
          className={`text-${color}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect stroke={color} x="0.5" y="0.5" width="13" height="19" />
          <rect fill={color} x="6" y="1" width="7" height="18" />
        </svg>
      );

    default:
      return (
        <svg
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className={"stroke-" + color} d="M0.5 0.5H14.5V19.5H0.5V0.5Z" />
          <rect className={"fill-" + color} x="1" y="1" width="6" height="18" />
        </svg>
      );
  }
};

export default CreatorSideIcon;
