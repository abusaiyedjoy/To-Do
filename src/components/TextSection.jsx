import { FaBell, FaCalendarAlt, FaSyncAlt } from "react-icons/fa";
import { IoMdCheckbox } from "react-icons/io";
import { IoCheckboxOutline, IoStarOutline, IoStarSharp } from "react-icons/io5";

const TextSection = () => {
    return (
        <section className="flex flex-col w-full">
            <div className="flex flex-col justify-between bg-[#eaf2eb] h-[180px] mb-3 dark:bg-[#2f3630] p-4 rounded-md shadow-md w-full mx-auto">
                {/* Task Label */}
                <h1 className=" text-gray-800 mt-10 dark:text-gray-200 text-lg font-medium">Add A Task</h1>
                <div className="flex justify-between items-center">
                    {/* Icons Section */}
                    <div className="flex justify-start space-x-4 mt-4">
                        <FaBell className="  text-gray-800 dark:text-gray-200 text-xl cursor-pointer" />
                        <FaSyncAlt className="  text-gray-800 dark:text-gray-200 text-xl cursor-pointer" />
                        <FaCalendarAlt className="  text-gray-800 dark:text-gray-200 text-xl cursor-pointer" />
                    </div>

                    {/* Add Task Button */}
                    <button
                        className="bg-[#ccf2d1] dark:bg-green-700 font-medium text-green-800 dark:text-gray-100 text-sm px-4 py-2 rounded-lg opacity-70"
                        disabled
                    >
                        ADD TASK
                    </button>
                </div>

            </div>
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
        </section>
    );
}
export default TextSection;