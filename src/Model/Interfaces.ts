 
 export interface TaskFormData {
    id: string;
    taskTitle: string;
    personName: string;
    taskDescription: string;
    startDate: string;
    endDate: string;
    status: string;
}
export const initialTaskFormData = {
    id : '',
    taskTitle: '',
    personName: '',
    taskDescription: '',
    startDate: '',
    endDate: '',
    status: '',
}