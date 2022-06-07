import axios from "axios";
import React, { useState, useEffect } from "react";

export const ConnectNode = () => {
  const [data, setData] = useState([]);
  const [txt, setTxt] = useState("");

  const getData = async() => {
    let result=await axios.get("http://localhost:5050/person");
        setData(result.data)
        setTxt(result.data)
        console.log(data)   
    }
// const getData=()=>{
//     fetch("http://localhost:5050/").then((res)=>res.json()).then((res)=>console.log(res.data));
// }


  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>{txt.name} </p>
      <p>{txt.email} </p>
      <p>{txt.mobile} </p>
      <p>{txt.city} </p>
    </div>
  );
};
