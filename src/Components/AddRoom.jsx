import React from "react";
import {TextField,Button,Grid} from '@mui/material'

export const AddRoom=()=>{

    return(
        <div className="sub">
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <TextField label='Room Number:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label='Room Capacity:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label='Room Size:' variant="outlined"/>
                </Grid>
                <Grid item xs={3}>
                    <TextField label='Number of Beds:' variant="outlined"/>
                </Grid>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained">Save </Button>
                </Grid>
                <Grid item xs={1}>
                    <Button variant="contained">Cancel </Button>
                </Grid>
            </Grid>

        </div>
    )
}