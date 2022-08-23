import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';


export default function GetMethod() {
    // when we work with API's take useState as an array
    const [data, setData] = useState([])

    // takes 3 states for the pre-filled data
    const [univName, setUnivName] = useState("")
    const [univCountry, setUnivCountry] = useState("")
    const [univWeb, setUnivWeb] = useState("")

    // always use useEffect not use directly fetch because when ever the component is rendering then the api is fetching it will slow our 
    useEffect(() => {
        // fetch always return promise to handle this we using then
        fetch('http://universities.hipolabs.com/search?country=United+States').then((result) => {
            result.json().then((responseTwo) => {
                console.log("Result is", responseTwo);
                setData(responseTwo)
            })
        })
    }, [])

    // function fpr pre-filled fprm
    function selectUniversity(id) {
        console.log(data[id]);
        setUnivName(data[id].name)
        setUnivCountry(data[id].country)
        setUnivWeb(data[id].web_pages)
    }
    return (
        <div>
            <h1>Get Method</h1>
            {/* pre-filled form data */}
            <div>
                <h2>Pre-Filled form Data</h2>
                <input type={"text"} value={univName} /> <br /> <br />
                <input type={"text"} value={univCountry} /> <br /> <br />
                <input type={"text"} value={univWeb} /> <br /> <br />
                <button>Update User</button>
            </div>
            <Table striped bordered hover variant="dark" >
                <tbody>
                    <tr>
                        <th>S.No</th>
                        <th>University Name</th>
                        <th>Country</th>
                        <th>Web Page</th>
                        <th>Select Op</th>
                    </tr>
                    {
                        data.map((item, serialNum) =>
                            <tr key={serialNum}>
                                <td>{serialNum + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.country}</td>
                                <td>{item.web_pages}</td>
                                <td><button onClick={() => selectUniversity(serialNum)}>Select</button></td>
                            </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}
