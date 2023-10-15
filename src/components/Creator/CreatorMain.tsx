import AboutGroup from "./components/AboutGroup";
import InputWithDescription from "./components/InputWithDescription";
import ManyFildsGroup from "./components/ManyFildsGroup";
import SidePagination from "./components/SidePagination";
import SideSelect from "./components/SideSelect";

const CreatorMain: React.FunctionComponent = () => {
  return (
    <div className="w-1/2 bg-white px-7 py-10 overflow-y-scroll">
      <div className="flex justify-between">
        <SidePagination />
        <SideSelect />
      </div>
      <div>
        <AboutGroup />
        <ManyFildsGroup />
        <InputWithDescription />
        <InputWithDescription />
      </div>
    </div>
  );
};

export default CreatorMain;
