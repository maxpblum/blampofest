import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

const App = React.createClass({
  render() {
    return <div className="content group">

        <h1><span className="names">Gigi and Max</span> are getting married!</h1>

        <div className="column left">
          <img className="silly-photo" src={require('./cute_at_wedding.jpg')} />
        </div>

        <div className="column right">
          <p className="information group">
            <label className="type-info">Saturday, October 15, 2016</label>

            <label className="type-info">Ceremony</label>
              <label className="info">
                Union Chapel <br />
                15 Wachusett Ave<br />
                Hyannis Port, MA
              </label>

            <label className="type-info">Reception</label>
              <label className="info">
                The Hyannis Port Club<br />
                2 Irving Ave<br />
                Hyannis Port, MA
              </label>

            <label className="type-info">Attire</label>
              <label className="info">Semiformal</label>
          </p>
        </div>

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

const appDiv = document.createElement('div')
appDiv.id = 'app'
document.body.appendChild(appDiv)

ReactDOM.render(<App/>, document.getElementById('app'))
