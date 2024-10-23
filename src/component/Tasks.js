import React, { useState, useEffect } from 'react';
import '../style/Tasks.css'; // CSS fayl

const Tasks = () => {
  const [tasks, setTasks] = useState(() => {
    // localStorage-dan oldingi vazifalarni yuklash
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Har safar vazifalar o'zgarganda ularni localStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Vazifa qo'shish funksiyasi
  const addTask = () => {
    if (task.trim() && date && time) {
      setTasks([...tasks, { text: task, date: date, time: time, completed: false }]);
      setTask('');
      setDate('');
      setTime('');
    }
  };

  // Vazifani o'chirish funksiyasi
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  // Vazifani bajarilgan deb belgilash funksiyasi
  const toggleComplete = (index) => {
    const newTasks = tasks.map((t, i) => i === index ? { ...t, completed: !t.completed } : t);
    setTasks(newTasks);
  };

  return (
    <div className="tasks-container">
      <h1 className="title">Tasks</h1>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter new task..."
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.length === 0 && <p>No tasks yet. Add some!</p>}
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <div>
              <span onClick={() => toggleComplete(index)}>{task.text}</span>
              <div className="task-meta">
                <small>On {task.date} at {task.time}</small>
              </div>
            </div>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
