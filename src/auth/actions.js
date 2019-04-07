import {
  REGISTER_REQUESTED,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './constants';

export const registerUser = (formData) => {
  return dispatch => {
    dispatch(markLoading());
    fetch('https://api-jfdzl2.herokuapp.com/api/v1/users/signup', {
      method: 'POST',
      body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(responseData => {
    dispatchEvent(populateUserData(responseData))
  })
  .catch(error => {
    dispatchEvent(markError());
  })
}
}

export const populateUserData = (responseData) => ({
  type: REGISTER_SUCCESS,
  user: responseData
});

export const markLoading = () => ({
  type: REGISTER_REQUESTED,
});

export const markError = () => ({
  type: REGISTER_FAIL,
});

