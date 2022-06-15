import React, { useEffect, useState } from "react";
import { TextField, Grid } from "@mui/material";

export const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [copyTodo, setCopyTodo] = useState([]);
  const [txt, setTxt] = useState("");
  const [num,setnum]=useState(0)

  console.log(copyTodo);

  const handleSubmit = () => {
    // setTxt(todo);
    setTodo([txt, ...todo]);
    setCopyTodo([txt, ...todo]);
    setTxt("");
  };
  const handleDelete = (item) => {
    const result = todo.filter((elm) => elm !== item);
    setTodo(result);
  };

  return (
    <div className="main-container">
        <Grid>
        <button onClick={()=>setnum(num+1)}>+</button>
        <span>{num}</span>
        <button onClick={()=>setnum(num-1)}>-</button>
        </Grid>

      <div className="todos">
        <TextField
        //   style={{ width: "400px", fontSize: "22px" }}
          color="primary"
          variant="standard"
          placeholder="Please Add Your Todos"
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
        />
        <button onClick={handleSubmit}>+</button>
        {todo.map((item, i) => {
          return (
            <h5 onClick={() => handleDelete(item)}>
              {i + 1} {item}
            </h5> //onClick={()=>handleDelete(item)}
          );
        })}
      </div>
    </div>
  );
};
