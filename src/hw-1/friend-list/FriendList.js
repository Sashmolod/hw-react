import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <Friend
        id={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

export default FriendList;
