// Code DigitalClicker Component Here
import React from 'react'
export default class DigitalClicker extends React.Component{

   
  constructor(){
      super()
     this.state={
         timesClicked: 0
     }

  }

  handleClicked=()=>{
    this.setState(previousState => {
      return {  
       timesClicked: previousState.timesClicked + 1 
      }
    })
  }


   render(){
       return(
           <div> 
           <p>{this.state.timesClicked}</p>
            <button onClick={this.handleClicked}>
             {this.state.timesClicked} 
            </button>
           </div>
       )
   }

}