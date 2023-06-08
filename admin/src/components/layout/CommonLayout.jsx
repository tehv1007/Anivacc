import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import Header from "./Header";

const CommonLayout = () => {
  const [isDark, setIsDark] = useState(false);

  const getTheme = () => {
    if (window.localStorage.getItem("dark")) {
      return JSON.parse(window.localStorage.getItem("dark"));
    }
    return (
      !!window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    );
  };

  const setTheme = (value) => {
    window.localStorage.setItem("dark", value);
  };

  useEffect(() => {
    setIsDark(getTheme());
  }, []);

  const toggleTheme = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      setTheme(newIsDark);
      return newIsDark;
    });
  };

  return (
    <>
      <div className={isDark ? "dark" : ""}>
        <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
          {/* Header */}
          <Header isDark={isDark} toggleTheme={toggleTheme} />

          {/* Sidebar */}
          <SideBar />

          <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default CommonLayout;
