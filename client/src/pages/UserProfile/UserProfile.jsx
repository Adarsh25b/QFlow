import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import moment from "moment";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";
import { followUser, unfollowUser } from "../../actions/users";

const UserProfile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);
  const dispatch = useDispatch();

  const followingUser = async (userid) => {
    dispatch(followUser(userid));
  };

  const unfollowingUser = async (userid) => {
    dispatch(unfollowUser(userid));
  };

  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <div className="Avatar">
                {currentProfile?.name.charAt(0).toUpperCase()}
              </div>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>
                   Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
                {currentUser?.result._id !== id &&
                  (currentProfile?.followers.includes(
                    currentUser?.result._id
                  ) ? (
                    <button
                      className="follow-button"
                      onClick={() => unfollowingUser(id)}
                    >
                      Unfollow
                    </button>
                  ) : (
                    <button
                      className="follow-button"
                      onClick={() => followingUser(id)}
                    >
                      Follow
                    </button>
                  ))}
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                Edit Profile
              </button>
            )}
          </div>
          <div>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;