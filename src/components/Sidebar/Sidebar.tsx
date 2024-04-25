import Button from "../UI/Button";

import addImg from "../../assets/add.svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="min-h-screen w-72  border-r-2">
      <section className="flex flex-col items-center justify-between gap-5">
        <Button className="flex pr-3 items-center bg-gray-100 rounded-full shadow-lg">
          <img src={addImg} alt="Create appointment" className="w-10" />
          <span className="text-md">Create Appointment</span>
        </Button>
      </section>
    </aside>
  );
};

export default Sidebar;
