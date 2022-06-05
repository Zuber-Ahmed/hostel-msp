import React, { useState,useEffect } from "react";
import {Grid} from '@mui/material'
import '../Chats/Chat.css'
import {Boy1} from './Boy1'
import {Boy2} from './Boy2'


export const Chat=()=>{
    const[txtboy1,setTxtBoy1]=useState([])
    const[txtboy2,setTxtBoy2]=useState([])

    useEffect(()=>{

        // setTxtBoy1([...txtboy1,txtboy2])
        // setTxtBoy2([...txtboy2,txtboy1])

    },[txtboy1,txtboy1])
    return(
        <div className="chat-container">
            <h2>Chat App</h2>
           <Grid container spacing={3}>
               <Grid item xs={6}>
                   <Boy1 setTxtBoy1={setTxtBoy1} txtboy2={[txtboy2,...txtboy1]}/>
               </Grid>
               <Grid item xs={6}>
                   <Boy2 setTxtBoy2={setTxtBoy2} txtboy1={[txtboy1,...txtboy2]}/>
               </Grid>
           </Grid>

        </div>
    )
}