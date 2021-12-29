import React, { useState ,useEffect,useRef} from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");
  const inputRef=useRef(null)
  useEffect(()=>{
      inputRef.current.focus()
  })
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: Math.floor(Math.random() * 10000), text: input });
    setInput("");
  };
  return (
    <form className="toDo-Form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Add a To-Do Activicty"
        value={input}
        className="toDo-Input"
        ref={inputRef}
      ></input>
      <button className="toDo-Button">Add Activicty</button>
    </form>
  );
}

export default ToDoForm;
