import React from 'react'
import ReactDOM from 'react-dom'

const Registry = React.createClass({
  render() {
    return <div className="content group">
      <div className="registry">
        First and foremost, what we want from you is for
        you to come to our wedding and have a blast!
        If you insist on getting us a gift, then please feel
        free to check out our wish lists below!
        <br/>
        <br/>
        <a className="registry-item" href="http://www.honeyfund.com/wedding/blampofest">
          Honeyfund
        </a>
        <a className="registry-item" href="http://www.crateandbarrel.com/gift-registry/gabrielle-campo-and-max-blum/r5521278">
          Crate&Barrel
        </a>
        <a className="registry-item" href="http://savethechildren.org/celebrate/blampofest">
          Save the Children
        </a>

        <br/>
        <br/>
        Finally, please enjoy this ridiculous picture of Luna lounging at work with Max:
        <img className="luna-photo" src={require('../photos/lunaridiculous.jpg')} />
      </div>

    </div>

  }

})

module.exports = Registry;
