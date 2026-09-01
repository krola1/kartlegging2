import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  const [todos, setTodos] = useState(["Lars", "Fisk"]);
  //----------------------------------------------------------------

  const addTodo = (text) => {
    setTodos([...todos, text]);
  };

  return (
    <>
      <Input addTodo={addTodo} />
      <List array={todos} />
    </>
  );
}

export default App;
