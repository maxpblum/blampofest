import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'


const App = React.createClass({

  render() {
    return <div>
        <nav className="tabs group">
          <li className="root-tab"><Link to={'/'}>Details</Link></li>
          <li className="root-tab"><Link to={'/party'}>Wedding Party</Link></li>
          <li className="root-tab"><Link to={'accommodations'}>Accommodations and Travel</Link></li>
          <li className="root-tab"><Link to={'registry'}>Registry</Link></li>
        </nav>
        {this.props.children}
      </div>
  }

})

module.exports = App;
