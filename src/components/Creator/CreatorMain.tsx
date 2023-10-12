import SidePagination from "./components/SidePagination";
import SideSelect from "./components/SideSelect";

const CreatorMain: React.FunctionComponent = () => {
  return (
    <div className="w-1/2 bg-white p-3">
      <div className="flex justify-between">
        <SideSelect />
        <SidePagination />
      </div>
    </div>
  );
};

export default CreatorMain;
