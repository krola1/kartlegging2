import { useState } from "react";

export default function Input({ addTodo: onAdd }) {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmit} action="">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
      />
      <button>Add</button>
    </form>
  );
}
