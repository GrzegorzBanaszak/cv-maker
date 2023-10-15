import CreatorSimpeInput from "./components/CreatorSimpeInput";
import CreataGroupDescriptionInput from "./components/CreataGroupDescriptionInput";
import CreateGroupInput from "./components/CreateGroupInput";
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
        <CreatorSimpeInput />
        <CreateGroupInput />
        <CreataGroupDescriptionInput />
        <CreataGroupDescriptionInput />
      </div>
    </div>
  );
};

export default CreatorMain;
