import {
  AiOutlineHome,
  AiOutlineAppstoreAdd,
  AiOutlineUnorderedList,
  AiOutlineFileAdd,
  AiOutlineUsergroupAdd,
  AiOutlineSetting,
  AiOutlineFolderAdd,
} from "react-icons/ai";
import { HiOutlineNewspaper, HiOutlineClipboardList } from "react-icons/hi";
import { Link } from "react-router-dom";

const SidebarItem = ({ navLink, children, title }) => {
  return (
    <li>
      <Link
        to={navLink}
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
          {children}
        </span>
        <span className="ml-2 text-sm tracking-wide truncate">{title}</span>
      </Link>
    </li>
  );
};
const SideBar = () => {
  return (
    <section>
      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-blue-900 dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Main
                </div>
              </div>
            </li>
            <SidebarItem title="Dashboard" navLink="/">
              <AiOutlineHome className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Thêm sản phẩm" navLink="/products/new">
              <AiOutlineAppstoreAdd className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Danh sách sản phẩm" navLink="/products/list">
              <AiOutlineUnorderedList className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Thêm tin tức" navLink="/posts/add-news">
              <AiOutlineFileAdd className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Danh sách tin tức" navLink="/posts">
              <HiOutlineNewspaper className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Thêm giải pháp" navLink="/solutions/new">
              <AiOutlineFolderAdd className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Danh sách giải pháp" navLink="/solutions">
              <HiOutlineClipboardList className="w-5 h-5" />
            </SidebarItem>
            <SidebarItem title="Yêu cầu của khách hàng" navLink="/inquiry">
              <AiOutlineUsergroupAdd className="w-5 h-5" />
            </SidebarItem>

            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                  Settings
                </div>
              </div>
            </li>
            <SidebarItem title="Settings" navLink="#">
              <AiOutlineSetting className="w-5 h-5" />
            </SidebarItem>
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Bản quyền thuộc về công ty Anivacc. Copyright @2023
          </p>
        </div>
      </div>
    </section>
  );
};

export default SideBar;
