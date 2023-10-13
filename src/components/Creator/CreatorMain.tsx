import AboutGroup from "./components/AboutGroup";
import SidePagination from "./components/SidePagination";
import SideSelect from "./components/SideSelect";

const CreatorMain: React.FunctionComponent = () => {
  return (
    <div className="w-1/2 bg-white px-7 pt-10 ">
      <div className="flex justify-between">
        <SidePagination />
        <SideSelect />
      </div>
      <div>
        <AboutGroup />
      </div>
    </div>
  );
};

export default CreatorMain;
