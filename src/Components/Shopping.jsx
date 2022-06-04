import React,{useEffect, useState} from "react";
import axios from "axios";
import { Grid,TextField} from "@mui/material";
import { EShopping } from "./eShopping";


export const Shopping=()=>{
    const[data,setData]=useState([])
    const[copydata,setCopyData]=useState([])
    const[search,setSearch]=useState('')
    const[type,setType]=useState(false)

    const getData=async()=>{
        let result=await axios.get('https://fakestoreapi.com/products')
        console.log("myData",result.data);
        setData(result.data)
        setCopyData(result.data)
    }

    useEffect(()=>{
        getData();
    },[])


    useEffect(()=>{
        let result=copydata.filter((e)=>e.title.toUpperCase().includes(search.toUpperCase()));
        setData(result) 
    },[search])

    // useEffect(()=>{
    //     let types=copydata.filter((e)=>e.category.includes("Men's"));
    //     setData(types)
    //     setType(true)
    // },[type])


    return(
        <div className="sub3">
            <Grid container spacing={1}>
                    <Grid item xs={4}>
                         <h3>Welcome to e-Shopping!</h3>
                    </Grid>
                <Grid item xs={5}>
                <TextField style={{width:"500px",margin:"10px"}} label="Search Item" variant="outlined" onChange={(e)=>setSearch(e.target.value)}/>
                <input type="checkbox" value={false} onChange={(e)=>setType(e.target.value)} />Men's
                </Grid>
            </Grid>
            <Grid container spacing={4}>
            {data.map((item)=>(
                <Grid item xs={3}>
                        <EShopping prod={item}/>
                    </Grid>
                )
            )}
            </Grid>

        </div>
    )
}