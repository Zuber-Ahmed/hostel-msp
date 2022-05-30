import React from "react";
import { Link } from "react-router-dom";
import {Grid,Card,CardContent, Typography} from '@mui/material'

export const NavBar=()=>{

    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <Grid item>
                <Typography
            variant="h5"
            // noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              flexGrow: 1,
              fontFamily: 'sans-serif',
              fontWeight: 900,
              letterSpacing: '.2rem',
              textDecoration: 'none',
              textAlign:"center",
              fontSize:30,
              color:'midnightblue'
            }}
          >PICKUPBIZ HOSTEL 
          </Typography>
          </Grid>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Link to={'/FrontDesk'}>Front Desk</Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Link  to={'/Admin'}>Admin</Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Link to={'/Login'}>Login</Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Link to={'/Signup'}>Sign Up</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}