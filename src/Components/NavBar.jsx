import React from "react";
import { Link } from "react-router-dom";
import {Grid,Card,CardContent} from '@mui/material'


export const NavBar=()=>{

    return(
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                        <Card>
                        <img className="imglogo" 
                        src='/Logo.png' 
                        alt=""/>
                </Card>
                </Grid>
                <Grid item xs={2}>
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
                <Grid item xs={2}>
                    <Card>
                        <CardContent>
                            <Link to={'/eshop'}>e-Shopping</Link>
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
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Link to={'/Chats'}>Chat App</Link>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={1}>
                    <Card>
                        <CardContent>
                            <Link to={'/MyChats'}>My Chats</Link>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}