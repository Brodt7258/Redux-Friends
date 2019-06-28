import { combineReducers } from 'redux';

const friendsReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

const initialFlags = {
  deletingFriend: false,
  fetchingFriends: false,
  loggingIn: false,
  savingFriends: false,
  updatingFriend: false,
  error: null
};

const flagsReducer = (state = initialFlags, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default combineReducers({
    friends: friendsReducer,
    flags: flagsReducer
  });
