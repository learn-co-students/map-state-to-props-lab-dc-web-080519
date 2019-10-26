import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  render() {
    console.log(this.props.users)
    return (
      <div>
        <ul>
          {this.props.users.length} Users!
          {this.props.users.map(user =>
            <li key={user.username}>{user.username}</li>)}
          
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {users: state.users}
}

// connect this component to Redux
export default connect(mapStateToProps)(Users)
