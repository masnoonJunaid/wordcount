import React from "react"

//HOC is a function that takes a component as a parameter
//And returns a new component wrapping the given component
//and increase the capabilities of given component

class Toggler extends React.Component {
  state = {
    on: this.props.defaultOnValue
  }

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      }
    })
  }

  render(){
    return (
      <div>
        {this.props.render(this.state.on, this.toggle)}
      </div>
    )
  }
}




export default Toggler
