import { useState ,useEffect,useRef,useReducer} from "react";
import "./App.css";
  // Reducer function
function todosReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { text: action.text, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo, i) =>
        i === action.index ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

function TodoApp() {
  const [todos, dispatch] = useReducer(todosReducer, []);
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text });
    setText('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input   className="border-1 bg-amber-50" value={text} onChange={e => setText(e.target.value)} />
      </form>
      {todos.map((todo, i) => (
        <div
          key={i}
          onClick={() => dispatch({ type: 'TOGGLE_TODO', index: i })}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        >
          {todo.text}
        </div>
      ))}
    </div>
  );
}
export default TodoApp;
