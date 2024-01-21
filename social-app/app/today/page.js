import React from "react";
// import { MenuBar } from "./menubar";
import "./style.css";

const tasks = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' }
];

const habits = [
  { id: 1, name: 'Habit 1' },
  { id: 2, name: 'Habit 2' },
  { id: 3, name: 'Habit 3' }
];

export default function Today() {
  return (
    <div className="today-page">
      <div className="div-2">
        {/* <MenuBar className="menu-bar-instance" /> */}
        <div className="text-wrapper-2">Hello, Michelle</div>
        <div className="to-do">
          <div className="text-wrapper-3">To do&nbsp;&nbsp;&gt;</div>
          <div className="tasks-list">
            {tasks.map((task) => (
              <div key={task.id} className="task-item">
                <input type="checkbox" id={`task-${task.id}`} className="task-checkbox" />
                <label htmlFor={`task-${task.id}`} className="task-name">{task.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="habits">
          <div className="text-wrapper-3">Habits &gt;</div>
          <div className="tasks-list">
            {habits.map((task) => (
              <div key={task.id} className="task-item">
                <input type="checkbox" id={`task-${task.id}`} className="task-checkbox" />
                <label htmlFor={`task-${task.id}`} className="task-name">{task.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="completed">
          <div className="text-wrapper-3">Completed&nbsp;&nbsp;&gt;</div>
          <div className="frame">
            <div className="rectangle-7" />
            <div className="rectangle-7" />
            <div className="rectangle-7" />
            <div className="rectangle-7" />
            <div className="rectangle-7" />
          </div>
        </div>
      </div>
    </div>
  );
};
