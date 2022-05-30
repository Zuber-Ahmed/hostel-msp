import React,{useState} from "react";
import { Link } from "react-router-dom";
import {Card,CardContent,Grid, TextField,Button} from '@mui/material'


export const FrontDesk=()=>{

    const[user,setUser]=useState('');
    const[city,setCity]=useState('');
    const[age,setAge]=useState('');
    //@@@ This can be use instead of in line function
    const handleStore=()=>{
        sessionStorage.setItem("username",user)
        sessionStorage.setItem("cityname",city)
        localStorage.setItem("age",age)
        
    }
    return(
       <div className="sub">
           <h2>Front Desk Services  </h2>
           <TextField label="User Name" variant="outlined" onChange={(e)=>setUser(e.target.value)}/>
           <TextField label="City" variant="outlined" onChange={(e)=>setCity(e.target.value)}/>
           <TextField label="Age" variant="outlined" onChange={(e)=>setAge(e.target.value)}/>
           <Button variant="contained" onClick={handleStore}>Store Data</Button>
           <Grid container spacing={3}>
               <Grid item xs={4}>
                   <Card>
                       <CardContent>
                            <Link to='/FrontDesk/ManageRoom'>Manage Room</Link>
                       </CardContent>
                   </Card>
               </Grid>
               <Grid item xs={4}>
                   <Card>
                       <CardContent>
                            <Link to='/FrontDesk/RoomList'>Room List</Link>
                       </CardContent>
                   </Card>
               </Grid>
           </Grid>
       </div>
    )
}