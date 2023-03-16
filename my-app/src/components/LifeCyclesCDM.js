import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCycylesCDMChild'

// 1. component is called 
export class LifeCyclesCDM extends Component {
   constructor(props) {
    console.log('1. constructor called')
     super(props)
   
     this.state = {
        data: 'Loading...'
     }
   }
 
   // 4. getData method is then run. after 3 seconds the data fetched message is looged and the STATE is unpdated.
   getdata() {
    console.log('4 - 6 getData() called')
        setTimeout(() => {
            console.log('Data fetched!')
            this.setState({
                data: 'Loaded'
            })
            
        }, 3000)

   }
  
   // 3. componentDidMount is then called and fetches the getData method
   componentDidMount() {
    console.log(' 3 - 5 Component mounted!')
    this.getdata()
   }

   // 2 .render method is called .  5. render method is run after data message is logged and rendered with the new STATE
  render() {
    console.log('2. - 7 render method called')
    return (
        <div>
          <h1>{this.state.data}</h1>
          <LifeCyclesCDMChild />
        </div>
    )
  }
}

export default LifeCyclesCDM