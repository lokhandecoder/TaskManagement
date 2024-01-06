import React, { useState } from 'react'
import "../../Resources/Styles/Navbar.css";
import logo from "../../Resources/Assets/data-seers-final_1920_1080.png.png"
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleToggle = () => {
        setIsMobile(!isMobile);
    };
    const handleAddtask = () => {
        navigate('/add-task')
    }
    const hanldleHomepage = () => {
        navigate('/')

    }


    return (
        <nav className="navbar">
            <div className="navbar-logo" onClick={hanldleHomepage}>
                <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
            </div>
            <h1>Task Management by Amit Lokhande</h1>
            <button className="navbar-toggle" onClick={handleToggle}>
                Menu
            </button>
            {location.pathname === '/' ? (
                <button className='navbar-add-task' onClick={handleAddtask}>
                    Add task
                </button>
            ) : (
                <button className='navbar-home' onClick={hanldleHomepage}>
                    Home
                </button>
            )}
        </nav>
    )
}

export default Navbar