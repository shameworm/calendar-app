import Button from "../UI/Button";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-1/4  px-9 md:w-72">
      <Button className="text-md p-2 space-x-2 bg-gray-100 rounded-full shadow-lg ">
        Create Appointment
      </Button>
    </aside>
  );
};

export default Sidebar;
