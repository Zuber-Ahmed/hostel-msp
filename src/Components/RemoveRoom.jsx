import React from "react";
import { Button, Grid, TextField } from '@mui/material'


export const RemoveRoom=()=>{

    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item/>
                <Grid item xs={2}>
                    <TextField variant="outlined" label='Room Number'/>
                </Grid>
                <Grid item>
                    <Button variant="contained" >Remove</Button>
                </Grid>
            </Grid>

        </div>
    )
}