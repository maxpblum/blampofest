import React from 'react'


const App = React.createClass({

  render() {
    return(<div className="party content group">
        <h1>The Crew</h1>

        <div className="party group">
          <div className="column left">
            <h2>The Ladies </h2>
            <ul>
              <li className="party-member">
                <img src={require('./lunaridiculous.jpg')}/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>

            </ul>
          </div>

          <div className="column right">
            <h2>The Fellas </h2>
            <ul>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
              <li className="party-member">
                <img src=""/>
                <h3>name</h3>
                <p>blurb</p>
              </li>
            </ul>
          </div>
        </div>


        <div className="party-shared">
          <h2>
            The Officiant
          </h2>
        </div>

        <div className="party-shared">
          <h2>
            The Pup
          </h2>
        </div>
      </div>)
  }

})

module.exports = App;
