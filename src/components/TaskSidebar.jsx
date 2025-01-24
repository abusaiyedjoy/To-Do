import { FaPlus, FaBell, FaCalendarAlt, FaSyncAlt } from "react-icons/fa";
import { AiOutlineStar, AiOutlineDelete } from "react-icons/ai";
import { BsCheckSquare, BsPencilSquare } from "react-icons/bs";

const TaskSidebar = () => {
    return (
        <aside className="w-full sm:w-80 hidden bg-gray-100 dark:bg-[#2c2c2c] min-h-screen lg:flex flex-col justify-between p-4 shadow-md">
            {/* Task Details */}
            <div>
                <div className="flex justify-between items-center border-b border-gray-300 dark:border-gray-600 py-4">
                    <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-200">
                        Buy groceries
                    </h1>
                    <AiOutlineStar className="text-xl text-gray-600 dark:text-gray-400 cursor-pointer" />
                </div>
                <ul className="mt-6 space-y-4">
                    <li className="flex items-center text-gray-900 dark:text-gray-200 text-lg">
                        <BsCheckSquare className="mr-4" />
                        Add Step
                    </li>
                    <li className="flex items-center text-gray-900 dark:text-gray-200 text-lg">
                        <FaBell className="mr-4" />
                        Set Reminder
                    </li>
                    <li className="flex items-center text-gray-900 dark:text-gray-200 text-lg">
                        <FaCalendarAlt className="mr-4" />
                        Add Due Date
                    </li>
                    <li className="flex items-center text-gray-900 dark:text-gray-200 text-lg">
                        <FaSyncAlt className="mr-4" />
                        Repeat
                    </li>
                    <li className="flex items-center text-gray-500 dark:text-gray-400 italic">
                        <BsPencilSquare className="mr-4" />
                        Add Notes
                    </li>
                </ul>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center text-gray-900 dark:text-gray-200 mt-6 border-t border-gray-300 dark:border-gray-600 pt-4">
                <button className="text-xl">
                    <span className="sr-only">Close</span>
                    <AiOutlineDelete />
                </button>
                <p className="text-sm text-gray-500 dark:text-gray-400">Created Today</p>
                <button className="text-xl">
                    <span className="sr-only">Delete</span>
                    <FaPlus />
                </button>
            </div>
        </aside>
    );
};

export default TaskSidebar;
