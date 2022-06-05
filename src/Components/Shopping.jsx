import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Grid, TextField,FormLabel,RadioGroup,FormControlLabel,Radio } from "@mui/material";
import { EShopping } from "./eShopping";

export const Shopping = () => {
  const [data, setData] = useState([]);
  const [category, setcategory] = useState([]);
  const [copydata, setCopyData] = useState([]);
  const [search, setSearch] = useState("");
  const [textcat, setTxtCat] = useState("");

  const getData = async () => {
    let result = await axios.get("https://fakestoreapi.com/products");
    // console.log("myData",result.data);
    setData(result.data);
    setCopyData(result.data);
  };
  const getCategory = async () => {
    let result = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    // console.log("myCate",result.data);
    setcategory(result.data);
  };
  useEffect(() => {
    getData();
    getCategory();
  }, []);

  useEffect(() => { 
          let result = copydata.filter((e) =>
          e.title.toUpperCase().includes(search.toUpperCase())||
          e.category.toUpperCase().includes(search.toUpperCase())||
          e.description.toUpperCase().includes(search.toUpperCase())
          );
          setData(result);
  }
  , [search]);
  useEffect(()=>{

    const filtered= copydata.filter((item)=>
    item.category.toUpperCase().includes(textcat.toUpperCase()))
    setData(filtered)
  },[textcat])


  return (
    <div className="sub3">
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <h3>Welcome to e-Shopping!</h3>
        </Grid>
        <Grid item xs={3}>
          <TextField
            style={{ width: "300px", margin: "10px" }}
            label="Search Item"
            variant="outlined"
            onChange={(e) => setSearch(e.target.value)}
          />
        </Grid>
        <Grid item>
            <FormLabel id="demo-controlled-radio-buttons-group">Categories</FormLabel>
          {category.map((item) => (
              <RadioGroup row value={textcat} onClick={()=>setTxtCat(item)}>
                  <FormControlLabel value={item} control={<Radio />} label={item}/>
            </RadioGroup>
            
            //   style={{ margin: "10px" }}
            //   variant="text"
            //   onClick={() => setTxtCat(item)}
            // >
            //   {item}
            // </>
          ))}
          
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {data.map((item) => (
          <Grid item xs={3}>
            <EShopping prod={item} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
