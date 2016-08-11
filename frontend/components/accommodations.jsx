import React from 'react';
import ReactDOM from 'react-dom';

const Accommodations = React.createClass({
  render() {
    return <div className="content group">
      <p className="intro">
        Hyannis Port is a very small town,
        perfect for walking or biking around and running into friends and family.
        To maximize the summer-camp / community atmosphere, we encourage you to skip
        the hotel and instead, book a cottage or house rental with friends or family!
        Here are a few great options.
      </p>

      <ul>
        <h1 className="house-header">Getting here</h1>
        <li className="house-option">
          <h3><a href="http://www.p-b.com/">Take the bus from Boston</a></h3>
          <p>
            The Plymouth-Brockton bus leaves hourly from Logan Airport and South Station, and drops off at the Hyannis bus
            station, walkable or Lyft-able from many housing options (including those listed below).
          </p>
        </li>

        <li className="house-option">
          <h3>Hitch a ride!</h3>
            <p>
              If you're driving from Boston or New York and might have space in your car, please email us to let us know! Ditto
              if you're hoping to land a ride. We'll try to pair people up!
            </p>
        </li>

        <li className="house-option">
          <h3>
            <a href="http://www.bikezonecapecod.com/">
              Rent bikes when you get here!
            </a>
          </h3>
          <p>
            We recommend renting bikes for the weekend! Biking is a great way to get around the beaches and shops of Hyannis Port
            and Hyannis.
          </p>
        </li>

        <h1 className="house-header">Staying here</h1>
        <li className="house-option">
          <h3>
            <a href="http://atlanticbusinessserv.ipage.com/captaingosnold.com-redirect/">
              Captain Gosnold Village
            </a>
          </h3>
          <p>
            Very cute cottages, walking distance to both Kalmus Beach and Main Street of Hyannis.
          </p>
        </li>

      <li className="house-option">
        <h3>
          <a href="http://www.capecod-greenmtn-bb.com/">
            Green Mountain Inn
          </a>
        </h3>
        <p>
          A very quaint B&B, also walking distance to both Kalmus Beach and to Main Street.
        </p>
      </li>

     <li className="house-option">
       <h3>
         <a href="https://www.vrbo.com/vacation-rentals/usa/massachusetts/cape-cod/hyannis-port?from-date=2016-10-14&to-date=2016-10-16&utm_source=cj&utm_medium=affiliates&utm_content=7985471&utm_campaign=10859114_skim2866X1544542Xf823881366690e516ee40bb31118a4cb">
           Hyannis Port house rentals
         </a>
       </h3>
       <p>
         Check out this site if you have a group and want to rent a house together in Hyannis Port! Email Gigi if you're thinking of doing this, since she might know the people you'd be renting from.
       </p>
     </li>



  </ul>
</div>
  }

})

module.exports = Accommodations;
