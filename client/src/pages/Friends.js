import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

//import stickers from '../assets/stickers'
// import encouragment commponent
//import reminder component
// import FriendList component

//steps, encouragement points, sticker up top,
const Friends = (props) => {
    const { email: userParam } = useParams();

    const [addFriend] = useMutation(ADD_FRIEND);
    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
      variables: { username: userParam },
    });

    const user = data?.me || data?.user || {};

if (loading) {
    return <div class="font-brush text-2xl">Loading...</div>;
  }
  if (!user?.username) {
    return (
      <h4 class="font-hand text-base">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div className="mb-3">
            <div className="col-12 col-lg-3 mb-3">
            <FriendList
                username={user.username}
                goals={user.goals}
                friends={user.friends}
            />
            </div>

            <div className="flex-row">
            <h2 className="display-inline-block" class="font-hand text-base">
            Viewing {userParam ? `${user.username}'s` : 'your'} profile.
            </h2>

            {userParam && (
            <button className="btn ml-auto" class="font-brush text-xl" onClick={handleClick}>
                Add Friend
            </button>
            )}
        </div>
      </div>
    </>
  );
};

export default Friends;