import Button from "../UI/Button";

import addImg from "../../assets/add.svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex flex-col items-center justify-between min-h-screen w-1/4 px-9 md:w-72 gap-5 border-r-2">
      <Button className="flex pr-3 items-center bg-gray-100 rounded-full shadow-lg">
        <img src={addImg} alt="Create appointment" className="w-10" />
        <span className="text-md">Create Appointment</span>
      </Button>
    </aside>
  );
};

export default Sidebar;
