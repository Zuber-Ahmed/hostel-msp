import React from "react";
import { Button, Grid, TextField } from '@mui/material'

export const MaintainRoom=()=>{

    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <TextField variant="outlined" label='Room Number'/>
                </Grid>
                <Grid item xs={3}>
                    <TextField variant="outlined" label='Expense'/>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='success'>Save</Button>
                </Grid>
            </Grid>
        </div>
    )
}