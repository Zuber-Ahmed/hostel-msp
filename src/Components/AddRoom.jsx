import React,{useState} from "react";
import {TextField,Button,Grid} from '@mui/material'
// import {DeleteIcon} from '@mui/icons-material'
import {v4 as uuidv4} from 'uuid'

export const AddRoom=()=>{
    const rows=JSON.parse(localStorage.getItem("roomdata"));

    const [roomdata,setRoomData]=useState([])
    const[roomno,setRoomNo]=useState([...rows])
    const[roomcap,setRoomCap]=useState([...rows])
    const[roomsize,setRoomSize]=useState([...rows])
    const[roombed,setRoomBeds]=useState([...rows])

    const addRoomToStore=()=>{
        const obj={id:uuidv4() , roomno:roomno,roomcap:roomcap, roomsize:roomsize,roombed:roombed};
        setRoomData([...roomdata,obj])
    };
    const handleSubmit=()=>{
        console.log(roomdata)
        localStorage.setItem("roomdata",JSON.stringify(roomdata))
    }
    return(
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField onChange={e=>setRoomNo(e.target.value)} label='Room Number:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField onChange={e=>setRoomCap(e.target.value)} label='Room Capacity:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField onChange={e=>setRoomSize(e.target.value)} label='Room Size:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField onChange={e=>setRoomBeds(e.target.value)} label='Number of Beds:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <Button color="info" variant="contained" onClick={addRoomToStore}>Save </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="error" variant="contained">Cancel </Button>
                </Grid>
                <Grid item xs={3}>
                    <Button color="success" variant="contained" onClick={handleSubmit}>Submit </Button>
                </Grid>
            </Grid>

        </div>
    )
}