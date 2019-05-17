import React, { Component } from 'react';
import { compose, graphql } from 'react-apollo'
import { getUser } from '../queries/user';

class GetUserDetails extends Component {
  displayDetail = () => {
    this.props.getUser.variables.id = this.props.id
    console.log(this.props.getUser)
    var data = this.props.getUser
    return (
      <ul style={{listStyleType: 'none'}}>
        {data.loading ? "still loading" :
        <li>
            {data.lastName + ' ' + data.firstName+ ' ' + data.email}
        </li>}
      </ul>
    )
  }
  render() {
    console.log(this.displayDetail())
    return (
      <div>
        {this.displayDetail()}
      </div>
    )
  }
}

export default compose(
  graphql(getUser, { name: "getUser" }),
)(GetUserDetails)