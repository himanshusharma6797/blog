import React,{PureComponent} from 'react'
import PureComponentInProps from './PureComponentInProps';
export default class PureComponentInState extends PureComponent{
    // by the use of PureComponent we can stop the re-render if the state is same 
    constructor(){
        super();
        this.state={
            count:1,
            count2:2
        }
    }
    render(){
        console.log("Pure Component render is run");
        return <div>
        <h1>Pure Component Count by state {this.state.count}</h1>
        <button onClick={()=>this.setState({count:69})}>Update count by state</button>
        {/* now there is no update so render is not running next time */}

        <PureComponentInProps data={this.state.count2}/>
        <button onClick={()=>this.setState({count2:123})}>Update count by props</button>
        </div>
    }
}