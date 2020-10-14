import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../../actions/users';
import './UserPageStyles.css';

/**
 * Page per one user
 * @param match
 * @returns {JSX.Element}
 * @constructor
 */
const UserPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneUser(match.url));
  }, [match, dispatch]);

  const { currentUser, isLoading } = useSelector((state) => state.users);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className='user_info_section'>
      {currentUser && (
        <div className='user_block'>
          <img alt={`${currentUser.login}`} src={`${currentUser.avatar_url}`} />
          <p>Name: {currentUser.login}</p>
          <p>Followers: {currentUser.followers}</p>
          <p>Following: {currentUser.following}</p>
          <p>Created at: {new Date(currentUser.created_at).toLocaleString()}</p>
          <p>Company: {currentUser.company}</p>
          <p>Email: {currentUser.email}</p>
          <p>Location: {currentUser.location}</p>
          <p>Blog: {currentUser.blog}</p>
          <p>Bio: {currentUser.bio}</p>
        </div>
      )}
    </section>
  );
};

export default UserPage;
