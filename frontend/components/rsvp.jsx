import React from 'react';
import ReactDOM from 'react-dom';

const Rsvp = React.createClass({
  getInitialState () {
    return ({ first_name: "", last_name: "", attending: false})
  },

  updateFirst (event) {
    this.setState({first_name: event.currentTarget.value});
  },

  updateLast (event) {
    this.setState({last_name: event.currentTarget.value});
  },

  updateAttending (event) {
    this.setState({attending: event.currentTarget.value});
  },

  submitInfo (event) {
    event.preventDefault();
    $.ajax({
      url: "api/responses",
      method: "post",
      data: {response: this.state},
      success: function (el) {
        debugger
      }
    })
  },
  render () {
    return (<div className="content">
      <form onSubmit={this.submitInfo}>
        <label for="firstName" />
        First Name
        <input
          id="firstName"
          type="text"
          value={this.state.firstName}
          onChange={this.updateFirst}/>
        <label for="lastName" />
          Last Name
        <input
          id="lastName"
          type="text"
          value={this.state.lastName}
          onChange={this.updateLast}
          />
        <label for="attending"/>
        Are you coming? Check if yes!
        <input type="checkbox"
          value="true"
          id="attending"
          onChange={this.updateAttending} />
        <button>submit</button>

      </form>
    </div>);
  }
});

module.exports = Rsvp;
