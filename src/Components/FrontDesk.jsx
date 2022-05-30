import React from "react";
import { Link } from "react-router-dom";
import {Card,CardContent,Grid} from '@mui/material'
import { RoomList } from "./RoomList";

export const FrontDesk=()=>{

    return(
       <div className="sub">
           <h2>Front Desk Services  </h2>
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