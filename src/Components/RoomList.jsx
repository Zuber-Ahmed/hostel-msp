import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button,Grid} from "@mui/material";



export const RoomList=()=>{
    const[ismanager,setIsManager]=useState(false);      

    const columns=[
        {field:'id',headerName:'ID',width:150,editable: true},
        {field:'roomno',headerName:'Room No',width:150,editable: true},
        {field:'roomcap', headerName:"Room Capacity",width:150,editable: true},
        {field:'roomsize',headerName:'Room Size(Sq.Ft)',width:150,editable: true},
        {field:'roombed',headerName:'No.Beds',width:150,editable: true}
    ];
    const columnsHK=[
        {field:'roomno',headerName:'Room No',width:170,editable: true},
        {field:'roombed',headerName:'No.Beds',width:150,editable: true}
    ];
    const rows=[
        {id:1 , roomno:100,roomcap:10, roomsize:200,roombed:10},
        {id:2 , roomno:101,roomcap:15, roomsize:250,roombed:15},
        {id:3 , roomno:102,roomcap:20, roomsize:300,roombed:20},
        {id:4 , roomno:103,roomcap:10, roomsize:200,roombed:10},
        {id:5 , roomno:104,roomcap:20, roomsize:300,roombed:30},
        {id:6 , roomno:104,roomcap:20, roomsize:300,roombed:30},
    
    ];

    return(
        <div className="sub3">
            <Grid container spacing={1}>
                <Grid item xs={8}></Grid>
                <Grid item xs={2}>
            <Button variant="contained" onClick={()=>setIsManager(true)}> Manager </Button>
                </Grid>
                <Grid item xs={2}>
            <Button variant="contained" onClick={()=>setIsManager(false)}> House Keeper </Button>
                </Grid>
            </Grid>
            <DataGrid
            rows={rows}
            columns={ismanager ? columns:columnsHK }
            pageSize={5}
            checkboxSelection
            />
            
        </div>
    )
}