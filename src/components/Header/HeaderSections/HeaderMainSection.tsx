const HeaderMainSection: React.FC<{ currentDate: number }> = ({
  currentDate,
}) => {
  return (
    <section className="flex items-center justify-between gap-8">
      <div className="hamburger">
        <span className="block w-8 h-0.5 bg-gray-500"></span>
        <span className="block w-7 h-0.5 bg-gray-500"></span>
        <span className="block w-6 h-0.5 bg-gray-500"></span>
      </div>
      <div className="w-10 rounded-xl bg-[#41B06E] p-1">
        <div className="text-center text-md font-bold text-white">
          {currentDate}
        </div>
      </div>
      <span>Calendar</span>
    </section>
  );
};

export default HeaderMainSection;
