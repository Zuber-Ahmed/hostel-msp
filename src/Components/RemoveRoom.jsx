import React, { useState,useEffect } from "react";
import { Button, Grid, TextField } from '@mui/material'


export const RemoveRoom=()=>{

    const rows=JSON.parse(localStorage.getItem("roomdata"));
    const[rroom,setRroom]=useState('');
    const[newdata,setNewData]=useState([...rows]);
    const[copydata,setcopydata]=useState([])
    
    
    const handelRemove=()=>{
        // const filtered=JSON.stringify(newdata.filter((item)=>item.roomno !==rroom))
        const filtered=JSON.stringify(newdata.filter((item)=>item.roomno!==rroom));
        setNewData(filtered)
        // localStorage.setItem("roomdata",filtered);
        console.log(filtered)
        
    };

     
    return(
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item/>
                <Grid item xs={3}>
                    <TextField variant="outlined" label='Room Number' onChange={e=>setRroom(e.target.value)} />
                </Grid>
                <Grid item>
                    <Button variant="contained" color='error' onClick={handelRemove}>Delete Room</Button>
                </Grid>
            </Grid>

        </div>
    )
}