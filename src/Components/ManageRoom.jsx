import React,{useState} from "react";
import { Tab,Tabs } from "@mui/material";
import { AddRoom } from "./AddRoom";
import { RemoveRoom } from "./RemoveRoom";
import { RoomAllocation } from "./RoomAllocation";
import { MaintainRoom } from "./MaintainRoom";
import { RoomList } from "./RoomList";

export const ManageRoom=()=>{
    const[val,setVal]=useState('addroom');

    const currentUser=sessionStorage.getItem("username");
    const currentCity=sessionStorage.getItem("cityname");
    const localAge=localStorage.getItem("age")

    return(
        <React.Fragment>
            <h2>Welcome Mr. {currentUser} to Manage Room, I'm from {currentCity } and my age is{localAge}</h2>
            <Tabs value={val} onChange={(e,val)=>setVal(val)}>
                <Tab value='addroom' label='Add Room'/>
                <Tab value='removeroom' label='Remove Room'/>
                <Tab value='roomallocation' label='Room Allocation'/>
                <Tab value='maintenace' label='Maintenace Room'/>
                <Tab value='roomlist' label='Room List'/>
            </Tabs>
        {val==='addroom' && <AddRoom/>}
        {val==='removeroom' && <RemoveRoom/>}
        {val==='roomallocation' &&<RoomAllocation/> }
        {val==='maintenace' && <MaintainRoom/>} 
        {val==='roomlist' && <RoomList/>} 
        </React.Fragment>
    )

}