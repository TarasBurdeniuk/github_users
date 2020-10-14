import React from 'react';
import { useSelector } from 'react-redux';
import './MainPageStyles.css';
import UserItem from './UserItem';

/**
 * Main page
 * @returns {JSX.Element} - representing all users
 * @constructor
 */
const MainPage = () => {
  const { allUsers } = useSelector((state) => state.users);

  return (
    <section className='main_section'>
      <div className='users_container'>{allUsers && allUsers.map((user) => <UserItem user={user} key={`${user.login}_${user.id}`} />)}</div>
    </section>
  );
};

export default MainPage;
