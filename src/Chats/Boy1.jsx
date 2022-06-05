import React,{useState} from "react";
import {TextField,Button,Grid,SnackbarContent} from '@mui/material'

export const Boy1=({setTxtBoy1,txtboy2})=>{
    const[txt,setTxt]=useState([]);


    return(
        <div className="chat-item">
            <h4>Hey from Boy1</h4>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <TextField variant="outlined" color="info" className="chattext" onChange={(e)=>setTxt(e.target.value)}/>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={()=>setTxtBoy1([txt])}>Send</Button>
                </Grid>
                <Grid item>
                    <SnackbarContent message={[txtboy2]} />
                </Grid>
            </Grid>
        </div>
    )
}