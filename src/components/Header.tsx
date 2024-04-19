const Header: React.FC = () => {
  const currDate = new Date().getDate();

  return (
    <>
      <div className="container m-5 border-b-2">
        <header className="flex items-center justify-between pb-2">
          <div className="flex items-center justify-between gap-8">
            <div className="hamburger">
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-5 h-0.5 bg-gray-600"></span>
            </div>
            <div className="w-10 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
              <div className="bg-gray-50 text-center">{currDate}</div>
            </div>
            <span>Calendar</span>
          </div>
          <div className="flex items-center justify-between">
            <button className="text-sm text-white p-2 px-5 rounded-xl shadow-lg bg-gray-600 duration-200 hover:opacity-80  ">
              Today
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
