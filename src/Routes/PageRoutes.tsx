import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import AddTask from '../Pages/AddTask';
import Navbar from '../Components/Fixed/Navbar';
import { ToastContainer } from 'react-toastify';

function PageRoutes() {
    return (
        // <div>PageRoutes</div>
        <>
            <Navbar />
            <Routes>
                <Route path="/TaskManagement/" element={<HomePage />} />
                <Route path="/TaskManagement/add-task" element={<AddTask />} />
                <Route path="/TaskManagement/add-task/:taskId" element={<AddTask />} />
            </Routes>
            <ToastContainer position="top-center" />

        </>
    )
}

export default PageRoutes