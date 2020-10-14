import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className='item_user'>
      <p className='user_login'>{user.login}</p>
      <Link className='link_user' to={`${user.login}`}>
        {user.html_url}
      </Link>
      <img src={`${user.avatar_url}`} className='user_image' alt={`${user.login}`} />
    </div>
  );
};

export default UserItem;
