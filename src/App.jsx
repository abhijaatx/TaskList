import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import TodoList from './TodoList';
import "./App.css";

function App() {
  return (

    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/todolist" element={<TodoList />} />
    </Routes>



  );
}

export default App;
