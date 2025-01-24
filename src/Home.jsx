/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "./assets/logo.png";
import Sidebar from "./components/Sidebar";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import TextSection from "./components/TextSection";
import { RxCross2 } from "react-icons/rx";

const Home = ({ onLogout, user }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true); 

  return (
    <div
      className={`${
        darkMode ? "dark" : "light"
      } bg-gray-100 dark:bg-[#242424] min-h-screen`}
    >
      <div className="min-h-screen px-4 bg-gray-100 dark:bg-[#242424] text-gray-800 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between max-w-[1450px] mx-auto items-center mb-6 py-3">
          <div className="flex justify-center items-center gap-3">
            {/* Toggle Sidebar */}
            <button className="cursor-pointer"
              onClick={() => setShowSidebar((prev) => !prev)}>
              {showSidebar ? <RxCross2 size={20} /> : <TfiMenuAlt size={20}/> }
            </button>
            
            <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="">
              <IoSearch size={20} />
            </div>
            {/* Toggle TaskSidebar */}
            <div className="cursor-pointer">
              <LuLayoutDashboard
                size={20}/>
            </div>
            <button onClick={() => setDarkMode(!darkMode)} className="">
              {darkMode ? (
                <MdOutlineLightMode size={20} />
              ) : (
                <BsMoonStars size={20} />
              )}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex justify-between gap-4 my-12 max-w-[1450px] mx-auto">
          {/* Sidebar */}
          {showSidebar && <Sidebar onLogout={onLogout} user={user} />}

          {/* Tasks Section */}
          <TextSection />
        </main>
      </div>
    </div>
  );
};

export default Home;
