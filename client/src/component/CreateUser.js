import React, { Component } from 'react';
import { AddUser, Userss } from '../queries/user'
import { compose, graphql } from 'react-apollo'

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email:"",
      gender:"",
      userName:"",
      isAdmin: true
    };
  }

  submitForm = (e) => {
    e.preventDefault();
    this.props.AddUser({
      variables:{
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email:this.state.email,
        gender:this.state.gender,
        userName:this.state.userName,
        isAdmin: this.state.isAdmin
      },
      refetchQueries: [{ query: Userss }]
    })
  }
  render() {
    return (
      <form id='add-book' onSubmit={this.submitForm.bind(this)}>

        <div className="field">
          <label>First Name:</label>
          <input type="text" onChange={(e) => this.setState({firstName: e.target.value})}/>
        </div>

        <div className="field">
          <label>Last Name:</label>
          <input type="text" onChange={(e) => this.setState({lastName: e.target.value})}/>
        </div>

        <div className="field">
          <label>userName:</label>
          <input type="text" onChange={(e) => this.setState({userName: e.target.value})}/>
        </div>

        <div className="field">
          <label>Email:</label>
          <input type="text" onChange={(e) => this.setState({email: e.target.value})}/>
        </div>

        <div className="field">
          <select onChange={(e) => this.setState({gender: e.target.value})}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <button>BUTTON</button>
      </form>
    )
  }
}

export default compose(
  graphql(AddUser, { name: "AddUser" }),
)(CreateUser)
 