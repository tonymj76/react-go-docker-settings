import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { Userss } from '../queries/user'
import GetUserDetails from '../component/GetUserDetails'

const btn = {
  display:'inline-block',
  background:'eee',
  border:'1px solid black',
  borderRadius: '10px',
  color:'blue',
  padding: '5px',
  cursor: 'pointer',
  margin: '10px'
}


class Users extends Component {
  constructor(props){
    super(props);
    this.state = {
      id:""
    }
  }
  getUser = () => {
    var data = this.props.data;
    console.log(this.state.id)
    return (
      <ul style={{listStyleType: 'none'}}>
        {data.loading ? "still loading" : data.users.map((user) =>
        <li key={user.id}>
          <a style={btn} onClick = {()=> this.setState({id:user.id})}>
            {user.lastName + ' ' + user.firstName+ ' ' + user.email}
          </a>
        </li>)}
      </ul>
    )
  }
  render() {
    return (
      <div>
        {this.getUser()}
        <GetUserDetails id= {this.state.id}/>
      </div>
    )
  }
}

export default graphql(Userss)(Users);