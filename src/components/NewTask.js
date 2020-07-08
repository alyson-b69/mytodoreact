import React, { useState } from 'react';

const NewTask = ({ onTodoAdd }) => {

  const [nouveauTodo, setNouveauTodo] = useState("");

  const handleChange = event => {
    setNouveauTodo(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = nouveauTodo;
    const done = false;

    onTodoAdd({ id, nom, done });

    setNouveauTodo("");
  };


  return (
    <form onSubmit={handleSubmit} className="taskForm">
      <input
        value={nouveauTodo}
        onChange={handleChange}
        type="text"
        placeholder="Ajouter une todo"
        className="inputAdd"
      />
      <button type="sumbit" className="addingBtn">
        Ajouter
      </button>
    </form>
  );
};


  export default NewTask;