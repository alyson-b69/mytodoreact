import React, { useState } from 'react';
import NewTask from '../components/NewTask'
import Task from '../components/Task'
import Filter from '../components/Filter'
import Counter from '../components/Counter'
import './TodoApp.css'

const TodoApp = () => {

  const [todos, setTodos] = useState([
    { id: 1, nom: "Apprendre React", done: false },
    { id: 2, nom: "Créer TodoApp", done: true },
    { id: 3, nom: "Prendre un café", done: false }
  ]);

  const [filter, setFilter] = useState("Toutes");

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleAdd = todo => {
    setTodos([...todos, todo]);
  };

  //check à revoir

  const handleCheck = id => {
    setTodos(
      todos.map(todo => {
        return todo.id === id ? { ...todo, done: !todo.done } : todo;
      })
    );
  };

  // Récupération via le click du nouvel etat de filter
  const handleFilter = newF => {
    setFilter(newF);
  };

  // Affichage rendus par les différents filtres
  const getFilteredTasks = () => {
    if (filter === "à faire") {
      return todos.filter(todo => !todo.done);
    } else if (filter === "faites") {
      return todos.filter(todo => todo.done);
    } else {
      return todos;
    }
  };

    return (
      <div className="wrapper">
        <h1>MA TODOLIST</h1>
        <div className="taskList">
        <NewTask onTodoAdd={handleAdd}/>
        <ul>
        {getFilteredTasks().map(todo => {
            return (
              <Task
                key={todo.id}
                details={todo}
                onDelete={handleDelete}
                onToggle={handleCheck}
              />
            );
          })}
        </ul>

        </div>

        <div className="footer">
        <Counter todoCount={todos.filter(todo => !todo.done).length}/>
       
        {/* ferme taskList */}
        <Filter 
          currentFilter={filter}
          filters={["Toutes", "faites", "à faire"]}
          onFilterChange={handleFilter}
        />
         </div> 
        </div>
    );
  }

  export default TodoApp;

