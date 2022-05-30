import React from "react";
import { Button, Grid, TextField } from '@mui/material'


export const RemoveRoom=()=>{

    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item/>
                <Grid item xs={3}>
                    <TextField variant="outlined" label='Room Number'/>
                </Grid>
                <Grid item>
                    <Button variant="contained" color='error' >Delete Room</Button>
                </Grid>
            </Grid>

        </div>
    )
}