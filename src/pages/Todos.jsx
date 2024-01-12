import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodoWithAuth } from "../store/todosSlice";
import TodoList from "../components/TodoList";

export default function Todos() {
  const [newTodo, setNewTodo] = useState({
    todo: '',
    completed: false,
    userId: 15,
  })
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newTodo);
    dispatch(createTodoWithAuth(newTodo))
  }

  return (
    <div className="wrapper">
      <form className="todo-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" value={newTodo.todo} onChange={(e) => setNewTodo({...newTodo, todo: e.target.value})}/>
        </div>
        <div>
          <button type="submit">Add</button>
      </ div>
      </form>
      <TodoList/>
    </div>
  )
}
