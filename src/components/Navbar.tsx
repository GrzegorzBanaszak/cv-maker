import React, { useEffect, useState } from "react";
import { Link, Location, useLocation } from "react-router-dom";

const Navbar: React.FunctionComponent = () => {
  const location: Location = useLocation();
  const [navType, setNavType] = useState<string>("");

  useEffect(() => {
    if (location.pathname === "/") {
      setNavType("flex gap-4 text-gray-400 text-xl mt-5 ml-8");
    } else {
      setNavType("flex gap-4 text-gray-400 text-xl py-5 px-8 bg-nav-primary");
    }
  }, [location.pathname]);
  return (
    <nav>
      <ul className={navType}>
        <li className={location.pathname === "/" ? "text-white" : ""}>
          <Link to={"/"}>Strona Głowna</Link>
        </li>
        <li className={location.pathname === "/wzory" ? "text-white" : ""}>
          <Link to={"/wzory"}>Wzory</Link>
        </li>
        <li className={location.pathname === "/kreator" ? "text-white" : ""}>
          <Link to={"/kreator"}>Kreator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
