import React,{useState} from "react";
import { Tab,Tabs } from "@mui/material";
import { AddRoom } from "./AddRoom";
import { RemoveRoom } from "./RemoveRoom";
import { RoomAllocation } from "./RoomAllocation";

export const ManageRoom=()=>{
    const[val,setVal]=useState('addroom')

    return(
        <React.Fragment>
            <Tabs value={val} onChange={(e,val)=>setVal(val)}>
                <Tab value='addroom' label='Add Room'/>
                <Tab value='removeroom' label='Remove Room'/>
                <Tab value='roomallocation' label='Room Allocation'/>
            </Tabs>
        {val==='addroom' && <AddRoom/>}
        {val==='removeroom' && <RemoveRoom/>}
        {val==='roomallocation' &&<RoomAllocation/> }
        </React.Fragment>
    )

}