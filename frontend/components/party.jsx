import React from 'react';


const App = React.createClass({

  render() {
    return(<div className="party content group">
        <h1>The Crew</h1>

        <div className="party group">
          <div className="column left">
            <h2>Ladies </h2>
            <ul>
              <li className="party-member group">
                <img src={require('../photos/katie.png')}/>
                <h3>Maid of Honor: Katie Campo</h3>
                <p>Gigi's sister</p>
              </li>
              <li className="party-member group">
                <img src={require('../photos/sally1.png')}/>
                <h3>Sally Merwin</h3>
                <p>Gigi's cousin</p>
              </li>
              <li className="party-member group">
                <img src={require('../photos/sarah.png')}/>
                <h3>Sarah Groves</h3>
                <p>Gigi's cousin</p>
              </li>
              <li className="party-member group">
                <img src={require('../photos/rebecca.png')}/>
                <h3>Rebecca Blum</h3>
                <p>Gigi's soon-to-be sister-in-law</p>
              </li>
              <li className="party-member group">
                <img src={require('../photos/abby.png')}/>
                <h3>Abby Schilbach</h3>
                <p>Gigi's close friend from Williams</p>
              </li>

            </ul>
          </div>

          <div className="column right">
            <h2>Fellas </h2>
            <ul>
              <li className="party-member groomsmen group">
                <img src={require('../photos/adam.png')}/>
                <h3>Best Man: Adam Bildersee</h3>
                <p>Max's close friend from college</p>
              </li>
              <li className="party-member groomsmen group">
                <img src={require('../photos/jon.png')}/>
                <h3>Jon Bittner</h3>
                <p>Max's brother-in-law</p>
              </li>
              <li className="party-member groomsmen group">
                <img src={require('../photos/will.png')}/>
                <h3>Will Campo</h3>
                <p>Max's soon-to-be brother-in-law</p>
              </li>
              <li className="party-member groomsmen group">
                <img src={require('../photos/warren.png')}/>
                <h3>Warren Ryan</h3>
                <p>Max's other soon-to-be brother-in-law</p>
              </li>
              <li className="party-member groomsmen group">
                <img src={require('../photos/nuffer.png')}/>
                <h3>Dan Nuffer</h3>
                <p>Max's close friend from high school</p>
              </li>
            </ul>
          </div>
        </div>


        <div className="party-shared">
          <h2>Officiant</h2>
          <span className="party-member group">
            <img src={require('../photos/danmeyer.png')}/>
            <h3>Dan Meyer</h3>
            <p>Friend of the couple's from Williams and NYC</p>
          </span>
        </div>

        <div className="party-shared">
          <h2>Pup of Honor</h2>
          <span className="party-member group">
            <img src={require('../photos/luna.png')}/>
            <h3>Luna</h3>
            <p>Needs no introduction.</p>
          </span>
        </div>

      </div>)
  }

})

module.exports = App;
