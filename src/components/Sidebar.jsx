/* eslint-disable react/prop-types */
import { FaPlus, FaRegCalendarAlt } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import { LuLogOut, LuNotebookText } from "react-icons/lu";
import { MdOutlineAssignmentInd } from "react-icons/md";
import { TbBrandPlanetscale } from "react-icons/tb";

const Sidebar = ({ onLogout, user }) => {
    return (
        <aside className="w-full hidden sm:w-80 bg-white dark:bg-[#2c2c2c] shadow-md min-h-screen sm:flex flex-col justify-between">
            <div className="">
                <div className="p-6 text-center relative pt-5">
                    <img
                        src="https://picsum.photos/200/300"
                        alt="Profile"
                        className="w-20 h-20 rounded-full absolute -top-10 left-[50%] transform -translate-x-1/2 border-2 dark:border-gray-800"
                    />
                    <h2 className="text-lg font-semibold mt-8 text-gray-900 dark:text-gray-200">
                        Hey, {user}
                    </h2>
                </div>
                <ul className="space-y-4 p-2 dark:bg-[#232323] rounded-md mx-3 mt-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <LuNotebookText className="mr-2" />
                            All Tasks
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <FaRegCalendarAlt className="mr-2" />
                            Today
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <IoStarSharp className="mr-2" />
                            Important
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <TbBrandPlanetscale className="mr-2" />
                            Planned
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <MdOutlineAssignmentInd className="mr-2" />
                            Assign to me
                        </a>
                    </li>
                </ul>
                <div className="space-y-4 dark:bg-[#232323] rounded-md mx-3 mt-6">
                    <div className="p-2">
                        <a
                            href="#"
                            className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#263126]"
                        >
                            <FaPlus className="mr-2" />
                            Add List
                        </a>
                    </div>
                </div>
                <div className="mt-8 mx-4 p-4 bg-gray-100 dark:bg-[#232323] rounded-lg text-center">
                    <h3 className="text-sm font-semibold mb-2 text-gray-900 dark:text-gray-200">
                        Today Tasks
                    </h3>
                    <div className="w-24 h-24 mx-auto relative">
                        <svg
                            viewBox="0 0 36 36"
                            className="w-full h-full mx-auto"
                        >
                            <circle
                                cx="18"
                                cy="18"
                                r="15.915"
                                fill="none"
                                stroke="#4caf50"
                                strokeWidth="3.8"
                                strokeDasharray="75, 100"
                            ></circle>
                            <text
                                x="50%"
                                y="50%"
                                dominantBaseline="central"
                                textAnchor="middle"
                                fontSize="10px"
                                fontWeight="bold"
                                className="fill-current text-gray-900 dark:text-gray-200"
                            >
                                11
                            </text>
                        </svg>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                        Pending & Done
                    </p>
                </div>

            </div>
            <div className="space-y-4 mb-2 rounded-md mx-3 mt-6">
                <div className="">
                    <a
                        href="#"
                        onClick={onLogout}
                        className="flex items-center p-2 text-gray-900 dark:text-gray-200 hover:text-green-900 text-lg font-semibold rounded-lg hover:bg-[#dbe8dd] dark:hover:bg-[#243824]"
                    >
                        <LuLogOut className="mr-2" />
                        Logout
                    </a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
