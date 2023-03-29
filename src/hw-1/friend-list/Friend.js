import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../default.jpg";

const Friend = ({ id, avatar, name, isOnline }) => {
  return (
    <li className="item" key={id}>
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt={avatar} />
      <p clasNames="name">{name}</p>
    </li>
  );
};

Friend.defaultProps = {
  avatar: defaultImage,
};

Friend.propTypes = {
  avatar: PropTypes.string,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default Friend;
