import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { AddTaskutilities } from '../Utilities/AddTaskutilities';

const AddTask: React.FC = () => {

    const addtaskutility = AddTaskutilities();
    const { handleSubmit, formData, handleInputChange, handleTextareaChange, taskId, handleDeleteTask } = addtaskutility;

    return (
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="taskTitle" className="block text-gray-700 text-sm font-bold mb-2">
                            Task Title
                        </label>
                        <input
                            type="text"
                            id="taskTitle"
                            name="taskTitle"
                            value={formData.taskTitle}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div>
                        <label htmlFor="personName" className="block text-gray-700 text-sm font-bold mb-2">
                            Person Name
                        </label>
                        <input
                            type="text"
                            id="personName"
                            name="personName"
                            value={formData.personName}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="taskDescription" className="block text-gray-700 text-sm font-bold mb-2">
                        Task Description
                    </label>
                    <textarea
                        id="taskDescription"
                        name="taskDescription"
                        value={formData.taskDescription}
                        onChange={handleTextareaChange}
                        className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                    ></textarea>
                </div>

                <div className="flex gap-4 mb-5">
                    <div>
                        <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold mb-2">
                            Start Date
                        </label>
                        <input
                            type="date"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div>
                        <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold mb-2">
                            End Date
                        </label>
                        <input
                            type="date"
                            id="endDate"
                            name="endDate"
                            value={formData.endDate}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div>
                        <label htmlFor="status" className="block text-gray-700 text-sm font-bold mb-2">
                            Status
                        </label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            onChange={handleInputChange}
                            className="w-full border rounded-md py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select Status</option>
                            <option value="To do">To do</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div>
                    {!taskId && (
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add Task
                        </button>
                    )}
                    {taskId && (
                        <>
                            <button
                                type="submit"
                                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline ml-2"
                                onClick={handleDeleteTask}
                            >
                                Delete
                            </button>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddTask;
