import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


export default function GetMethod() {
    // when we work with API's take useState as an array
    const [data, setData]=useState([])

    // always use useEffect not use directly fetch because when ever the component is rendering then the api is fetching it will slow our 
    useEffect(()=>{
        // fetch always return promise to handle this we using then
    fetch('http://universities.hipolabs.com/search?country=United+States').then((result)=>{
        result.json().then((responseTwo)=>{
            console.log("Result is",responseTwo);
            setData(responseTwo)
        })
    })
    },[])
  return (
    <div>
        <h1>Get Method</h1>
        <Table striped bordered hover variant="dark" >
        <tbody>
                <tr>
                    <th>S.No</th>
                    <th>University Name</th>
                    <th>Country</th>
                    <th>Web Page</th>
                </tr>
                  {
                    data.map((item,serialNum)=>
                    <tr key={serialNum}>
                        <td>{serialNum+1}</td>
                        <td>{item.name}</td>
                        <td>{item.country}</td>
                        <td>{item.web_pages}</td>
                    </tr>)
                }
            </tbody>
        </Table>
    </div>
  )
}
