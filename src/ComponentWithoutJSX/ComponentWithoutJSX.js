import React from 'react'
// import {createElement} from 'react'
// we can use createElement directly without attached React if we import that like this {createElement}

export function ComponentWithoutJSX(){
    // return React.createElement('div',null,React.createElement('h1','class','Component Without JSX'));
    // in this the class will give you a Invalid attribute
    return React.createElement('div',null,React.createElement('h1',null,'Component Without JSX'));
    
    // first parameter is tag
    // second parameter is id or class
    // third parameter is what we want to put inside it
}