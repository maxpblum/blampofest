import React from 'react'
import ReactDOM from 'react-dom'

const Registry = React.createClass({
  render() {
    return <div className="content group">
      <div className="registry">
        Registry information to come later!
        For now, enjoy this picture of Luna lounging at work with Max:
        <img className="luna-photo" src={require('./lunaridiculous.jpg')} />
      </div>

    </div>

  }

})

module.exports = Registry;
