import React, { useEffect, useState } from "react";
import './UserList.css'

export const UserList=()=>{
        const[data,setData]=useState([])

    const getData=()=>{
          fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(result=>setData(result))
          console.log(data)

    }
    
    useEffect(()=>{
        getData()
    },[])


    return(
        <div className="container">
            <h3>User List</h3>
            <input type="text" className="inputbox" placeholder="Search Here"/>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Name<button className="btn">AZ-ZA</button></th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Longitude</th>
                    <th>Company Name</th>
                </tr>
            {data.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.address.city}</td>
                        <td>{item.address.geo.lng}</td>
                        <td>{item.company.name}</td>
                    </tr>
                    )
                })}
            </table>

        </div>
    )
}