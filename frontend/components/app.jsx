import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'


const App = React.createClass({

  render() {
    return <div>
        <nav className="tabs group">
          <li className="root-tab"><Link to={'about'} activeClassName="current">Details</Link></li>
          <li className="root-tab"><Link to={'party'}  activeClassName="current">Wedding Party</Link></li>
          <li className="root-tab"><Link to={'accommodations'}  activeClassName="current">Housing & Travel</Link></li>
          <li className="root-tab"><Link to={'registry'}  activeClassName="current">Registry</Link></li>
          <li className="root-tab"><Link to={'rsvp'}  activeClassName="current">RSVP</Link></li>
        </nav>
        {this.props.children}
      </div>
  }

})

module.exports = App;
