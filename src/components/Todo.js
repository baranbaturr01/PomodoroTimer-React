import React, { useState } from "react";


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
        
      </div>
    </div>
  );
}
function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={handleSubmit}>  
      <input placeholder="Add a Task And Enter" type="text" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
    </form>
  );
}
function App() {
  const [todos, setTodos] = useState([
    {
      text: "Görevlerini Yap",
      isCompleted: false
    },
    {
      text: "Başarı Tesadüf Değildir",
      isCompleted: false
    },
    {
      text: "İnancını Kaybetme",
      isCompleted: false
    }
  ]);
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div>
    <h3>GÜNLÜK GÖREVLERİNİ GİR</h3>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;