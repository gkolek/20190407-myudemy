import {
  REGISTER_REQUESTED, REGISTER_SUCCESS, REGISTER_FAIL
} from './constants';

export const registerUser = (formData) => {
  return async (dispatch) => {
    dispatch(markLoading());
    const response = await fetch('https://api-jfdzl2.herokuapp.com/api/v1/users/signup', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.status >= 200 && response.status < 300) {
      const responseData = await response.json();
      dispatch(populateUserData(responseData))
    } else {
      dispatch(markError());
    }
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
