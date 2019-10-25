import React, { Component } from 'react';
// add any needed imports here
import { connect } from 'react-redux'

class Users extends Component {
  render() {
    const userList = this.props.users.map(user => <li>{user.username}</li>)

    return (
      <div>
        <ul>
          {/* Write code here that displays the usernames of all users in the Redux store */}
          {userList}
          {/* In addition, display the total number of users curently in the store */}
        </ul>
        We have {userList.length} Users!
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
