import { useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { IoCheckboxOutline, IoSearch, IoStarOutline, IoStarSharp } from "react-icons/io5";
import { MdOutlineLightMode } from "react-icons/md";
import logo from "./assets/logo.png"
import Sidebar from './components/Sidebar';
import { IoMdCheckbox } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import TaskSidebar from "./components/TaskSidebar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : "light"} bg-gray-100 dark:bg-[#242424]`}>
      <div className=" min-h-screen px-4 bg-gray-100 dark:bg-[#242424] text-gray-800 dark:text-gray-100">
        {/* Header */}
        <header className="flex justify-between max-w-[1450px] mx-auto items-center mb-6 py-3">
          <div className="flex justify-center items-center gap-3">
          <TfiMenuAlt size={20} className="" />
          <img src={logo} alt="Logo" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="">
              <IoSearch size={20} />
            </div>
            <div className="">
            <LuLayoutDashboard size={20} />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className=""
            >
              {darkMode ? <MdOutlineLightMode size={20} /> : <BsMoonStars size={20} />}
            </button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex justify-between gap-4 my-12 max-w-[1450px] mx-auto">
          {/* Sidebar */}
          <Sidebar />

          {/* Tasks Section */}
          <section className="w-full">
            <h2 className="text-lg font-semibold mb-4">Pending Tasks</h2>
            <ul className="space-y-8 w-full font-medium">
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoCheckboxOutline />
                    <p>Buy groceries</p>
                  </div>
                  <IoStarOutline />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoCheckboxOutline />
                    <p>Finish project report</p>
                  </div>
                  <IoStarOutline />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoCheckboxOutline />
                    <p>Call the bank</p>
                  </div>
                  <IoStarOutline />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoCheckboxOutline />
                    <p>Schedule dentist appointment</p>
                  </div>
                  <IoStarOutline />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoCheckboxOutline />
                    <p>Plan weekend trip</p>
                  </div>
                  <IoStarOutline />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
            </ul>

            <h2 className="mt-8 text-lg font-semibold mb-4">Completed</h2>
            <ul className="space-y-8 font-medium mb-8">
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoMdCheckbox className="text-green-700" />
                    <p className="">Read a book</p>
                  </div>
                  <IoStarSharp />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoMdCheckbox className="text-green-700" />
                    <p className="">Clean the house</p>
                  </div>
                  <IoStarSharp />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoMdCheckbox className="text-green-700" />
                    <p className="">Prepare presentation</p>
                  </div>
                  <IoStarSharp />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
              <li>
                <a className="flex justify-between items-center">
                  <div className="flex justify-start items-center gap-3">
                    <IoMdCheckbox className="text-green-700" />
                    <p className="">Update blog</p>
                  </div>
                  <IoStarSharp />
                </a>
                <hr className="border-gray-400 mt-3" />
              </li>
            </ul>
          </section>

          {/* TaskSidebar */}
          <TaskSidebar/>
        </main>
      </div>
    </div>
  );
};


export default Home;
