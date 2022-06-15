import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Counter = () => {
  const [data, setData] = useState("");
  const [todos, setTodos] = useState([]);
  const[del,setDel]=useState('')
  console.log(todos);

  const handleAdd = () => {
    setTodos([data, ...todos]);
  };

  const handledelete = (elm) => {
    const dele = todos.filter((item) => item !== elm);
    setTodos(dele);
  };
  useEffect(()=>{
    let delter=todos.filter((item)=>item!==del);
    setTodos(delter)
  },[del])

  return (
    <div style={{ height: "100vh" }}>
      <input
        type="text"
        placeholder="Enter Todos"
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
      <input type='text' placeholder="delete todos" onChange={(e)=>setDel(e.target.value)} />
      <button onClick={() => handledelete()}>Delete</button>



      {todos.map((elm,ind) => {
        return <h2 onClick={()=>handledelete(elm)}>{elm}</h2>;
      })}
    </div>
  );
};
