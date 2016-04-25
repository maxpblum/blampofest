import React from 'react'
import ReactDOM from 'react-dom'

const Accommodations = React.createClass({
  render() {
    return <div className="content group">
      <p className="intro">
        Hyannis Port is a very small town,
        perfect for walking or biking around and running into friends and family.
        To maximize the summer-camp / community atmosphere, we encourage you to skip
        the hotel and instead, book a cottage or house rental with friends or family!
        Here are a few great options. On the day of the wedding, we'll provide
        transport to and from the wedding venue from all the locations listed below,
        so that everyone can imbibe merrily and stay safe!
      </p>

      <ul>
        <li className="house-option">
          <a href="http://atlanticbusinessserv.ipage.com/captaingosnold.com-redirect/">
            Captain Gosnold Village
          </a> very cute cottages, walking distance to both Kalmus Beach and Main Street of Hyannis.
        </li>

        <li className="house-option">
          <a href="http://www.uccr.org/camp/craigville-retreat-center">
            Craigville Retreat Center
          </a> great cottages close to Craigville Beach (no religious cult membership required, despite the website language).
       </li>

      <li className="house-option">
        <a href="http://www.capecod-greenmtn-bb.com/">
          Green Mountain Inn
        </a> a very quaint B&B, also walking distance to both Kalmus Beach and to Main Street.
      </li>

      <li className="house-option">
        <a href="http://www.capecodoceanviewmotel.com/">
          Ocean View Motel
        </a> a cute motel directly on Craigville Beach (about 3 miles from Hyannis Port, which is where all the festivities will be).
     </li>

     <li className="house-option">
       <a href="https://www.vrbo.com/vacation-rentals/usa/massachusetts/cape-cod/hyannis-port?from-date=2016-10-14&to-date=2016-10-16&utm_source=cj&utm_medium=affiliates&utm_content=7985471&utm_campaign=10859114_skim2866X1544542Xf823881366690e516ee40bb31118a4cb">
         Hyannis Port house rentals
       </a> check out this site if you have a group and want to rent a house together in Hyannis Port! Email Gigi if you're thinking of doing this, since she might know the people you'd be renting from.
     </li>

     <li className="house-option">
       <a href="http://www.bikezonecapecod.com/">Rent bikes!</a>
       We recommend renting bikes for the weekend! Biking is a great way to get around the beaches and shops of Hyannis Port
       and Hyannis.
     </li>

  </ul>
</div>
  }

})

module.exports = Accommodations;
