import React, { Component } from "react";
import { connect } from "react-redux";
import { actDeleteUser } from "./duck/action";

class UserItem extends Component {
  render() {
    const { user } = this.props;
    return (
      <tr>
        <td>{user.fullname}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.type}</td>
        <td>
          <button
            className="btn btn-info mr-2"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.props.onEditedUser(user);
            }}
          >
            Edit
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.onDeleteUser(user.id);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (id) => {
      dispatch(actDeleteUser(id));
    },

    onEditedUser: (user) => {
      const action = {
        type: "EDITED_USER",
        payload: user,
      };

      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(UserItem);
