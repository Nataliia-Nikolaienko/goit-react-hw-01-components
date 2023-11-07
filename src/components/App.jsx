import Sections from './Sections/Sections';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './Friends/friendList';
import TransactionHistory from './Transactions';

import user from '../data/user.json';
import data from '../data/statistic.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import '../index.css';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Sections>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Sections>
      <Sections title="Upload stats">
        <Statistics stats={data} />
      </Sections>
      <Sections>
        <FriendList friends={friends} />
      </Sections>
      <Sections>
        <TransactionHistory items={transactions} />
      </Sections>
    </div>
  );
};
