import { ADD_CONTACT } from './actionTypes';

export const addContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };
};
