import arrowImg from "../../assets/arrow.svg";

const Dropdown: React.FC = () => {
  return (
    <div className="relative lg:max-w-sm ">
      <select className="px-9 py-1 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-[#41B06E]">
        <option className="dropdown-option">Day</option>
        <option className="dropdown-option">Week</option>
        <option selected className="dropdown-option">
          Month
        </option>
        <option className="dropdown-option">Year</option>
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <img src={arrowImg} className=" h-4 w-4 rotate-[-90deg]" />
      </div>
    </div>
  );
};

export default Dropdown;
