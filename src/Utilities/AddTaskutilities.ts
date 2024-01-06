import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskFormData, initialTaskFormData } from "../Model/Interfaces";
import { toast } from "react-toastify";


export const AddTaskutilities = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState<TaskFormData>(initialTaskFormData);
    const { taskId } = useParams<{ taskId: string }>();
    useEffect(() => {
        if (taskId) {
            const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            const existingTask = existingTasks.find((task: TaskFormData) => task.id === taskId);

            if (existingTask) {
                setFormData(existingTask);

            }
        }
    }, [taskId]);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const generateId = (): string => {
        return `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    };
    const isFormValid = (formData: TaskFormData) => {
        return (
            formData.taskTitle.trim() !== '' &&
            formData.personName.trim() !== '' &&
            formData.taskDescription.trim() !== '' &&
            formData.startDate.trim() !== '' &&
            formData.endDate.trim() !== '' &&
            formData.status.trim() !== ''
        );
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        let existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskFormData[];
        if (!isFormValid(formData)) {
            toast.error('Please fill in all fields', {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }

        if (taskId) {
            const existingTaskIndex = existingTasks.findIndex((task) => task.id === taskId);

            if (existingTaskIndex !== -1) {
                existingTasks[existingTaskIndex] = formData;
                localStorage.setItem('tasks', JSON.stringify(existingTasks));
                console.log(existingTasks)
                toast.success('Task updated successfully');
            }
        } else {

            const newTask = {
                ...formData,
                id: generateId(),
            };
            existingTasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(existingTasks));
            navigate("/taskmanagement/add-task")
            toast.success('New task added successfully');
        }


        if (!taskId) {
            setFormData(initialTaskFormData);
        }
    };
    const handleDeleteTask = () => {
        if (taskId) {
            const existingTasks = JSON.parse(localStorage.getItem('tasks') || '[]') as TaskFormData[];
            const updatedTasks = existingTasks.filter(task => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            toast.success('Task deleted successfully');
            navigate("/taskmanagement/add-task")
            setFormData(initialTaskFormData);
        } else {
            toast.error('No task found to delete');
        }
    };

    return { handleSubmit, formData, handleInputChange, handleTextareaChange, taskId, handleDeleteTask }
}