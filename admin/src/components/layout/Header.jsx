import { useContext } from "react";
import { AiOutlineSearch, AiOutlineLogout } from "react-icons/ai";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AuthContext } from "../../pages/auth/Auth";

const Header = ({ isDark, toggleTheme }) => {
  const { onLogout } = useContext(AuthContext);

  return (
    <section>
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-blue-800 dark:bg-gray-800 border-none">
          <img
            className="w-auto h-7 md:w-auto md:h-10 mr-2 rounded-md overflow-hidden"
            src="/images/z4487164248109_6f5f5fad9c2229a5afff400b7196ba78.jpg"
          />
          <span className="hidden md:block">ADMIN</span>
        </div>
        <div className="flex justify-between items-center h-14 bg-blue-800 dark:bg-gray-800 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <AiOutlineSearch className="w-5 h-5 text-gray-500" />
            </button>
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div>
          <ul className="flex items-center">
            <li>
              <button
                aria-hidden="true"
                onClick={toggleTheme}
                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
              >
                {isDark ? (
                  <BsFillSunFill className="w-6 h-6" />
                ) : (
                  <BsFillMoonStarsFill className="w-6 h-6" />
                )}
              </button>
            </li>
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700" />
            </li>
            <li>
              <button
                onClick={onLogout}
                className="flex items-center mr-4 hover:text-blue-100"
              >
                <span className="inline-flex mr-1">
                  <AiOutlineLogout className="w-5 h-5" />
                </span>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
