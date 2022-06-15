import React, { useEffect, useState } from "react";

export const TodoList = () => {
  const [txt, setTxt] = useState("");
  const [tododata, setTodoData] = useState([]);
  const [copytododata, setCopyTodoData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(tododata);

  const handleAdd = () => {
    setTodoData([txt, ...tododata]);
    setCopyTodoData([txt, ...tododata]);
  };
  const handleDelete = (item) => {
    let result = tododata.filter((elm) => elm !== item);
    setTodoData(result);
  };

  const handleDeleteone = (item, ind) => {
    let result = tododata.filter((elm, i) => i !== ind);
    setTodoData(result);
  };

  useEffect(() => {
    let filtered = copytododata.filter((elm) => elm.includes(search));
    setTodoData(filtered);
  }, [search]);

  return (
    <div className="todos">
      <h1>Hello Todos</h1>

      <input
        placeholder="Type Todo"
        type="text"
        onChange={(e) => setTxt(e.target.value)}
      />
      <button onClick={handleAdd}> ADD</button>
      <br />
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>My Todos</h3>
      {tododata.map((item, i) => {
        return (
          <div>
            <h3 onClick={() => handleDelete(item)}>{item}</h3>
            <button onClick={() => handleDeleteone(item, i)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
