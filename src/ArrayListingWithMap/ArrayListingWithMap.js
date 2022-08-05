import React from 'react'
import {Table} from 'react-bootstrap';

export default function ArrayListingWithMap() {
    const students=['him','nish','kan','par','sid'];
    const studentsWithArrayOfObjects=[
        {name:'him',company:'BLM'},{name:'nish',company:'BLM'},{name:'kan',company:'BLM'},{name:'par',company:'BLM'},{name:'sid',company:'BLM'},{name:'hem',company:'HB'}];

    // by map looping 
    students.map((iterate)=>console.log("One by one map function will iterate and give all elements",iterate));
    // by for looping
    for(let i =0;i<students.length;i++){
        console.log("One by one for loop will iterate and give all elements", students[i])
    }
    return (
        <div>
        Handle Array with list
        <h3>Using Map for looping</h3>
        <h2>This list with bootstrap table</h2>
        <Table striped bordered hover variant="dark" >
            <tbody>
            <tr>
                <th>SNo.</th>
            <th>Name</th>
            <th>Company</th>
            </tr>
            {/* give second parameter to avoiding the unique key error */}
        {studentsWithArrayOfObjects.map((ele, i)=>
        // react_devtools_backend.js:4026 Warning: Each child in a list should have a unique "key" prop.
        ele.company==='BLM'?
        <tr key={i}>
            {/* give serial number  */}
        <td>{i+1}</td>
        <td>{ele.name}</td>
        <td>{ele.company}</td>
    </tr>:null
        // <>
        // <h1 key={ele.name}>Name: {ele.name}</h1>
        // <h1 key={ele.company}>Company: {ele.company}</h1>
        // </>
        // direct use tag not with curly braces
        )}
        </tbody>
        </Table>
        <h3>Using For loop for looping</h3>
        {/* {for(let i =0;i<students.length;i++){
            console.log("One by one for loop will iterate and give all elements", students[i])
        }} */}
        {/* the JSX will not supporting the for loop and gives error: Unexpected token */}
    </div>
  )
}
