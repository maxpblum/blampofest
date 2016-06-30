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
        <a className="registry-item" href="http://www.alrcares.com/">
          Animal Lighthouse Rescue
        </a>
        <a className="registry-item" href="http://www.honeyfund.com/wedding/blampofest">
          Honeyfund
        </a>
        <a className="registry-item" href="http://www.crateandbarrel.com/gift-registry/gabrielle-campo-and-max-blum/r5521278">
          Crate&Barrel
        </a>
        <a className="registry-item" href="https://www-ssl.bestbuy.com/profile/list/viewlist?listId=o1Dz%252F5irB%252FB7KTwQQZ9Lwqmp7sdfajreLFfqb%252FTxoyC%252FRSvvziYH7kY8kFXfh6b7EEO9YY%252FAbgq4vHcH8w8pSpIkQSDxc40FE%252FY86EmwEgwedPoB1wpvB4ef9nC4wiAHZ%252F%252F%252Fz6dk5WV2stHDJrFDLb6Pw49U%252FA0cFjApEkEdJ84SUSgNjAf9EPjT0Z6gYk8b91MPEn0zUtpXKOVHYH8uW74xWfqEsbqMCV%252B2JAu0ewp7dGs%252BWLZEK1lpkDtphVhcR8MBFonKCJi%252FBNFJAanKwteXoiWnYUFckISrh4IMCwkw9%252FKSrmotDrNGUUqrlkHgw6bWMwyw1oJBKhkrDo8CdP7UPnmPJrAZL8B3eyZGe748HeODAeqq8LfZ%252FQZL3rOp">
          Best Buy
        </a>

        <br/>
        <br/>
        Finally, please enjoy this ridiculous picture of Luna lounging at work with Max:
        <img className="luna-photo" src={require('./lunaridiculous.jpg')} />
      </div>

    </div>

  }

})

module.exports = Registry;
