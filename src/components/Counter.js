import React from "react";

const Counter = ({ todoCount }) => {
  return (
      <span className="taskCount">
        {todoCount === 0
          ? "All tasks are done"
          : todoCount === 1
          ? "1 tâche à faire"
          : `${todoCount} tâches à faire`}
      </span>
  );
};

export default Counter;