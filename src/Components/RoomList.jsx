import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button,Grid} from "@mui/material";


export const RoomList=()=>{
    const[ismanager,setIsManager]=useState(true); 

    const columns=[
        {field:'id',headerName:'ID',width:300,editable: true},
        {field:'roomno',headerName:'Room No',width:150,editable: true},
        {field:'roomcap', headerName:"Room Capacity",width:150,editable: true},
        {field:'roomsize',headerName:'Room Size(Sq.Ft)',width:150,editable: true},
        {field:'roombed',headerName:'No.Beds',width:150,editable: true}
    ];
    const columnsHK=[
        {field:'roomno',headerName:'Room No',width:170,editable: true},
        {field:'roombed',headerName:'No.Beds',width:150,editable: true}
    ];
    const rows=JSON.parse(localStorage.getItem("roomdata"))
    
    // const rows=[
    //     {id:1,roomno:1,roomcap:1,roomsize:1,roombed:1}
    // ]

    return(
        <div className="sub3">
            <h2>Room List</h2>
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