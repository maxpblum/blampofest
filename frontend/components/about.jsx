import React from 'react'
import ReactDOM from 'react-dom'

const About = React.createClass({
  componentDidMount() {
    console.log("component mounted!")
  },
  render() {
    console.log("we're in render!")
    return <div>about us here</div>
  }

})

module.exports = About;
