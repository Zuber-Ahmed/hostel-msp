import React from "react";
import { UserList } from "../JSON/UserList";
import {ConnectNode} from '../Components/ConnectNode'
export const Login=()=>{

    return(
        <div className="">
            <h2>Login</h2>
            <ConnectNode/>
            {/* <UserList/> */}
        </div>
    )
}