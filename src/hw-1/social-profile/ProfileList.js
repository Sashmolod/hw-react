import React from "react";
import PropTypes from "prop-types";
import Profile from "./Profile";

const ProfileList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.username}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </li>
    ))}
  </ul>
);

ProfileList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired, //id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProfileList;
