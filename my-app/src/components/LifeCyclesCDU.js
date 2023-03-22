import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
  constructor(props) {
    console.log('constructor called')
    super(props)
  
    this.state = {
       greeting: 'Hello'
    }
  }
  upDategreeting = () => {
    console.log('update greeting called')
    this.setState(prevState => {
        return {
          greeting: prevState.greeting === 'Hello' ?  'Goodbye': 'Hello'
        }
    })
  } 
  componentDidUpdate() {
    console.log('component updated')
  }

  render() {
    console.log('render menthod called')
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.upDategreeting}>Update greeting</button>
        <LifeCyclesCDUChild parentGreeting={this.state.greeting} />
      </div>
    )
  }
}

export default LifeCyclesCDU