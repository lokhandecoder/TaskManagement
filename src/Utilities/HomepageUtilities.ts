import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export const HomepageUtilities = () => {
    const [tasks, setTasks] = useState<any[]>([]);
    const navigate = useNavigate()

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const parsedTasks = JSON.parse(storedTasks);
            setTasks(parsedTasks);
        }
    }, []);

    const handleDragStart = (id: string) => {
        localStorage.setItem('draggedItemId', id);
    };

    const handleDragEnter = (column: string) => {
        const draggedItemId = localStorage.getItem('draggedItemId');
        if (draggedItemId !== null) {
            const updatedTasks = tasks.map(task =>
                task.id === draggedItemId ? { ...task, status: column } : task
            );
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    };

    const handleDragEnd = () => {
        localStorage.removeItem('draggedItemIndex');
    };
    function getTaskColor(status: string): string {
        switch (status) {
            case 'To do':
                return 'bg-white';
            case 'In Progress':
                return 'bg-custom-red';
            case 'Completed':
                return 'bg-custom-green';
            default:
                return 'bg-gray-100';
        }
    }
    const handleEdit = (id: number) => {
        // alert(id)\
        navigate(`/taskmanagement/add-task/${id}`)

    }

    const handleDelete = (id: string) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        toast.success("Deleted Successfully");
    };



    return { handleDragEnter, tasks, getTaskColor, handleDragStart, handleDragEnd, handleEdit, handleDelete }

}