import React,{useState} from 'react'
import {Card, CardContent, Grid,Badge} from '@mui/material'
import { User1 } from './User1'
import { User2 } from './User2'
import './UsersChat.css'

export const MyChats=()=>{
    const[chatdata,setChatData]=useState([]);
    const[istyping,setistyping]=useState(false)
    const[istyping2,setistyping2]=useState(false)

    console.log(chatdata)

    return(
        <div className='main-conatiner'>
            {/* <Grid container spacing={1} style={{margin:"10px"}}> */}
                {/* <Grid item xs={6}> */}
                    {/* <Card> */}
                        {/* <CardContent> */}
                        <div className='container-user1'>
                             <span>{istyping?"User2 typing...":""}</span>
                             <User1 setChatData={setChatData} chatdata={chatdata} setistyping2={setistyping2}/>
                        </div>
                        {/* </CardContent> */}
                    {/* </Card> */}
                {/* </Grid> */}
                {/* <Grid item xs={6}> */}
                    {/* <Card> */}
                    <div className='container-user2'>
                             <span>{istyping2?"User1 typing...":""}</span>
                             <User2 chatdata={chatdata} setChatData={setChatData} setistyping={setistyping}  />
                    </div>
                        {/* <CardContent> */}
                        {/* </CardContent> */}
                    {/* </Card> */}

                {/* </Grid> */}
            {/* </Grid> */}

        </div>
    )
}