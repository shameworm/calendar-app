import Button from "../../UI/Button";

import arrowImg from "../../../assets/arrow.svg";

const HeaderActionSection: React.FC<{ todaysDate: string }> = ({
  todaysDate,
}) => {
  return (
    <section className="flex items-center justify-between gap-5">
      <Button className="text-md text-white  p-2 px-5 rounded-xl shadow-lg bg-[#41B06E] duration-200 hover:opacity-80">
        Today
      </Button>
      <Button>
        <img src={arrowImg} alt="Previous date." />
      </Button>
      <Button>
        <img src={arrowImg} alt="Next date." className="rotate-180" />
      </Button>
      <p className="">{todaysDate}</p>
    </section>
  );
};

export default HeaderActionSection;
