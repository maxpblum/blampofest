import React from 'react';
import ReactDOM from 'react-dom';

const Rsvp = React.createClass({
  getInitialState () {
    return ({ first_name: "", last_name: "", attending: "", comments: ""})
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

  updateComments (event) {
    this.setState({comments: event.currentTarget.value});
  },

  makeAjax(info, callback) {
    $.ajax({
      url: "api/responses",
      method: "post",
      data: {response: info},
      success: function (response) {
        callback();
        alert("Thanks for your rsvp, " + response.first_name + "!");
      },
      error: function (error) {
        alert("Sorry, there was a problem processing your RSVP! Have you entered in your full name and whether you're attending?");
      }
    });
  },

  submitInfo (event) {
    event.preventDefault();
    this.makeAjax(this.state, this._clearInputs);
  },

  _clearInputs () {
    this.setState({first_name: "", last_name: "", attending: "", comments: ""});
  },

  render () {
    return (<div className="content">
      <form onSubmit={this.submitInfo} className="rsvp-form group">
        <label className="group">
          <h3 className="field-title">First Name</h3>
          <input
            className="response"
            type="text"
            value={this.state.first_name}
            onChange={this.updateFirst}/>
        </label>

        <label className="group">
          <h3 className="field-title">Last Name</h3>
          <input
            className="response"
            type="text"
            value={this.state.last_name}
            onChange={this.updateLast}
            />
        </label>

        <label className="group">
          <h3 className="field-title">Are you coming?</h3>
          <input type="radio"
            name="attending"
            value="true"
            onChange={this.updateAttending} /> Yes!
          <input type="radio"
            name="attending"
            value="false"
            onChange={this.updateAttending} /> No!
        </label>

        <label className="group">
          <h3 className="field-title">Comments/ Questions?</h3>
          <textarea
            placeholder="Where are you staying? Can you offer anyone a ride up?"
            onChange={this.updateComments} />
        </label>

        <button>RSVP!</button>

      </form>
    </div>);
  }
});

module.exports = Rsvp;
