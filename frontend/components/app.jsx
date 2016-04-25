import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'


const App = React.createClass({

  render() {
    return <div>
        <nav className="tabs group">
          <li className="root-tab"><Link to={'/'}>About Us</Link></li>
          <li className="root-tab"><Link to={'accommodations'}>Accommodations and Travel</Link></li>
          <li className="root-tab"><Link to={'registry'}>Registry</Link></li>
        </nav>
        {this.props.children}
      </div>
  }

})

// <p>
//   <label className="about-us">
//     Gigi and Max met at a mixer for peanut butter addicts
//     and people who have seen 1776 more than ten times.
//     It was love at first sight!
//   </label>
// </p>

module.exports = App;
