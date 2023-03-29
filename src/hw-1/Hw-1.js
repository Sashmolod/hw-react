import React, { Component } from "react";
//import shortid from "shortid";

import ProfileList from "./social-profile/ProfileList";
import FriendList from "./friend-list/FriendList";
import StatisticsList from "./statistics/StatisticsList";
import TransactionHistoryList from "./transaction-history/TransactionHistoryList";

import users from "./social-profile/user.json";
import transactions from "./transaction-history/transactions.json";
import friends from "./friend-list/friends.json";
import data from "./statistics/data.json";

class Hw1 extends Component {
  render() {
    return (
      <>
        <ProfileList users={users} />
        <FriendList friends={friends} />
        <StatisticsList title="Upload stats" stats={data} />
        {/* <StatisticsList stats={data} /> */}
        <TransactionHistoryList items={transactions} />
      </>
    );
  }
}

export default Hw1;
