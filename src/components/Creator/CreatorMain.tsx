import SidePagination from "./components/SidePagination";
import SideSelect from "./components/SideSelect";

const CreatorMain: React.FunctionComponent = () => {
  return (
    <div className="w-1/2 bg-white px-4 pt-6">
      <div className="flex justify-between">
        <SidePagination />
        <SideSelect />
      </div>
    </div>
  );
};

export default CreatorMain;
