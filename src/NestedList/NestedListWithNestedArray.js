import React from 'react'
import Table from 'react-bootstrap/Table';

export default function NestedListWithNestedArray() {
    // nested array 
    const apneLog=[
        {name:'him',company:'BLM'
        , address:[
            {'H/F No':'F No. 2b', village:'Jatipura', city:'Mathura', state:'UP'},
            {'H/F No':'H No. 2185', village:'Jatipura', city:'Mathura', state:'UP'},
            {'H/F No':'Bajar', village:'Jatipura', city:'Mathura', state:'UP'},
            {'H/F No':'Haweli', village:'Jatipura', city:'Mathura', state:'UP'},
        ]
    },
    {name:'nish',company:'BLM'
    , address:[
        {'H/F No':'khudka', village:'Radhika Vihar', city:'Mathura', state:'UP'},
        {'H/F No':'mausaji', village:'Radhika Vihar', city:'Mathura', state:'UP'},
        {'H/F No':'null', village:'Radhika Vihar', city:'Mathura', state:'UP'},
        {'H/F No':'undefine', village:'Radhika Vihar', city:'Mathura', state:'UP'},
    ]},
    {name:'kan',company:'BLM'
    , address:[
        {'H/F No':'nani', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'khudka', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'null', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'ramu mama ka', village:'Jatipura', city:'Mathura', state:'UP'},
    ]},
    {name:'par',company:'BLM'
    , address:[
        {'H/F No':'khudka', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'meghna', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'iska', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'uska', village:'Jatipura', city:'Mathura', state:'UP'},
    ]},
    {name:'sid',company:'BLM'
    , address:[
        {'H/F No':'ronchi', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'H No. 2185', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'Bajar', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'Haweli', village:'Jatipura', city:'Mathura', state:'UP'},
    ]},
    {name:'hem',company:'HB'
    , address:[
        {'H/F No':'mandi', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'H No. 2185', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'Bajar', village:'Jatipura', city:'Mathura', state:'UP'},
        {'H/F No':'Haweli', village:'Jatipura', city:'Mathura', state:'UP'},
    ]}];
  return (
    <div>
        <h1>Nested List With Nested Array</h1>
        <Table variant='dark' striped bordered hover>
            <thead>
                <tr>
                    <td>S.N</td>
                    <td>Name</td>
                    <td>Company</td>
                    <td>Address</td>
                </tr>
            </thead>
            <tbody>
                {apneLog.map((element,uniqueKey)=>
                <tr key={uniqueKey}>
                    <td>{uniqueKey+1}</td>
                    <td>{element.name}</td>
                    <td>{element.company}</td>
                    <td>
                        <Table variant='dark' striped bordered hover>
                            <thead>
                            <tr>
                    <th>House/Flat No</th>
                    <th>Village</th>
                    <th>City</th>
                    <th>State</th>
                </tr>
                            </thead>
                            <tbody>{element.address.map((addressElement,uK)=>
                    <tr key={uK}>
                        <td>{addressElement['H/F No']}</td>
                        <td>{addressElement.village}</td>
                        <td>{addressElement['city']}</td>
                        <td>{addressElement.state}</td>
                    </tr>)}
                        </tbody>
                        </Table>
                    </td>
                </tr>
                )}
            </tbody>
        </Table>
    </div>
  )
}
