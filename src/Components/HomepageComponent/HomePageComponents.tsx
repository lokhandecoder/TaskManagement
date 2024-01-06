import { FaEdit, FaTrash } from 'react-icons/fa';
import { HomepageUtilities } from '../../Utilities/HomepageUtilities';

function HomePageComponents() {

  const HomepageUtlitiy = HomepageUtilities();
  const { handleDragEnter, tasks, getTaskColor, handleDragStart, handleDragEnd, handleEdit, handleDelete } = HomepageUtlitiy;

  return (
    <>
      <div className="ml-8 mr-8 grid grid-cols-3 gap-4 mt-4 ">
        <div className="bg-gray-400 " onDragEnter={() => handleDragEnter('To do')}>
          <div className='flex justify-center bg-blue-500 text-white shadow-md mb-4 p-3 rounded '>
            <h3 className="text-lg font-semibold">To do</h3>
          </div>
          {tasks.filter(task => task.status === 'To do').map((task, index) => (
            <div
              key={task.id}
              className={`max-w-sm rounded  shadow-lg p-4 ml-10  ${getTaskColor(task.status)} ${index !== tasks.length - 1 ? 'mb-4' : ''}`}
              draggable
              onDragStart={() => handleDragStart(task.id)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                <div className="flex">
                  <FaEdit className="icon ml-2" onClick={() => handleEdit(task.id)} />
                  <FaTrash className="icon ml-2" onClick={() => handleDelete(task.id)} />
                </div>
              </div>
              <p><strong>Person:</strong> {task.personName}</p>
              <p><strong>Description:</strong> {task.taskDescription}</p>
              <p><strong>Start Date:</strong> {task.startDate}</p>
              <p><strong>End Date:</strong> {task.endDate}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-400 " onDragEnter={() => handleDragEnter('In Progress')}>
          <div className='flex justify-center bg-blue-500 text-white shadow-md mb-4 p-3 rounded'>
            <h3 className="text-lg font-semibold">Pending</h3>
          </div>
          {tasks.filter(task => task.status === 'In Progress').map((task, index) => (
            <div
              key={task.id}
              className={`max-w-sm rounded  shadow-lg p-4 ml-10 ${getTaskColor(task.status)} ${index !== tasks.length - 1 ? 'mb-4' : ''}`}
              draggable
              onDragStart={() => handleDragStart(task.id)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                <div className="flex">
                  <FaEdit className="icon ml-2" onClick={() => handleEdit(task.id)} />
                  <FaTrash className="icon ml-2" onClick={() => handleDelete(task.id)} />
                </div>
              </div>
              <p><strong>Person:</strong> {task.personName}</p>
              <p><strong>Description:</strong> {task.taskDescription}</p>
              <p><strong>Start Date:</strong> {task.startDate}</p>
              <p><strong>End Date:</strong> {task.endDate}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-400 " onDragEnter={() => handleDragEnter('Completed')}>
          <div className='flex justify-center bg-blue-500 text-white shadow-md mb-4 p-3 rounded'>
            <h3 className="text-lg font-semibold">Completed</h3>
          </div>
          {tasks.filter(task => task.status === 'Completed').map((task, index) => (
            <div
              key={task.id}
              className={`max-w-sm rounded  shadow-lg p-4 ml-10  ${getTaskColor(task.status)} ${index !== tasks.length - 1 ? 'mb-4' : ''}`}
              draggable
              onDragStart={() => handleDragStart(task.id)}
              onDragEnd={handleDragEnd}
              onDragOver={(e) => e.preventDefault()}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{task.taskTitle}</h3>
                <div className="flex">
                  <FaEdit className="icon ml-2" onClick={() => handleEdit(task.id)} />
                  <FaTrash className="icon ml-2" onClick={() => handleDelete(task.id)} />
                </div>
              </div>
              <p><strong>Person:</strong> {task.personName}</p>
              <p><strong>Description:</strong> {task.taskDescription}</p>
              <p><strong>Start Date:</strong> {task.startDate}</p>
              <p><strong>End Date:</strong> {task.endDate}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomePageComponents;
