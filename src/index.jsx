import React from 'react'
import ReactDOM from 'react-dom'

const App = React.createClass({
  render() {
    return <img src={require('./silliness.jpg')}>Hello world!</img>
  }
})

const appDiv = document.createElement('div')
appDiv.id = 'app'
document.body.appendChild(appDiv)

ReactDOM.render(<App/>, document.getElementById('app'))
