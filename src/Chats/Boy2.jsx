import React, { useState } from "react";
import {Grid,Button,TextField,SnackbarContent} from '@mui/material'


export const Boy2=({setTxtBoy2,txtboy1})=>{
    const[txt,setTxt]=useState([])

    
    return(
        <div className="chat-item">
            <h4>Hey from Boy2</h4>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <TextField variant="outlined" color="info" className="chattext" onChange={(e)=>setTxt(e.target.value)}/>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained" onClick={()=>setTxtBoy2([txt])}>Send</Button>
                </Grid>
            <Grid item>
                    <SnackbarContent message={[...txtboy1]} />
                </Grid>
            </Grid>
        </div>
    )
}