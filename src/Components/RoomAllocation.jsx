import React from "react";
import {Button, Grid,TextField} from '@mui/material'

export const RoomAllocation=()=>{

    return(
        <div className="sub">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <TextField variant="outlined" label='Candidate Name'/>
                </Grid>
                <Grid item xs={2}>
                    <TextField variant="outlined" label='Room Number'/>
                </Grid>
                <Grid item xs={2}>
                    <Button variant="contained">Allocate Room </Button>
                </Grid>
            </Grid>
        </div>
    )
}