import React, { useEffect, useState } from "react";
import {Grid,Card,CardContent} from '@mui/material'
import axios from "axios";

export const EmpData=()=>{
    const[empdata,setEmpData]=useState([]);

    const getData=async()=>{
        const result=await axios.get("http://localhost:5050/empdata");
        console.log(result.data);
        setEmpData(result.data)
    }
    useEffect(()=>{
        getData()
    },[])

    return(
        <div className="sub">
            <Grid container spacing={1}>
                    {empdata.map((item)=>{
                        return(
                            <Grid item xs={3}>
                            <Card>
                            <CardContent>
                            {item}
                            </CardContent>
                             </Card>
                            </Grid>
                        )
                    })}
            </Grid>
        </div>
    )
}