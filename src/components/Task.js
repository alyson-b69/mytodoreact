import React from 'react';

const Task = ({ details, onDelete, onToggle }) => {


    return (

      <li className={`${details.done ? "done" : ""}`}>
      <div className={`task ${details.done ? "done" : ""}`}>
        <span className="taskCheckbox">
          <input
           type="checkbox"
           checked={details.done}
           onChange={() => { onToggle(details.id);}}
        />
        </span>
        <span className="taskText">{details.nom}</span>
        <button className="deletingBtn" onClick={() => onDelete(details.id)}>
          X
        </button>
      </div>
      </li>
    );
  }

  export default Task;
