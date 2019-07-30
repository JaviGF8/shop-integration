import axios from 'axios';

export const MAIN_TYPES = {
  GET_CREDIT_AGREEMENTS: 'GET_CREDIT_AGREEMENTS',
  LOADING: 'LOADING',
  LOADING_END: 'LOADING_END',
};

const getCreditAgreement = () => (dispatch) => {
  dispatch({ type: MAIN_TYPES.LOADING });

  return new Promise((resolve, reject) => {
    axios
      .get('http://localhost:8080/credit_agreements?totalWithTax=15000')
      .then((response) => {
        dispatch({ type: MAIN_TYPES.GET_CREDIT_AGREEMENTS, creditAgreements: response.data });
        resolve(response.data);
        dispatch({ type: MAIN_TYPES.LOADING_END });
      })
      .catch((error) => {
        reject(error);
        dispatch({ type: MAIN_TYPES.LOADING_END });
      });
  });
};

export const initializeData = () => (dispatch) => {
  dispatch(getCreditAgreement());
};

export const setEvent = (event) => () =>
  new Promise((resolve, reject) => {
    axios
      .post('http://localhost:8080/events', event)
      .then((response) => {
        if (response && 200 === response.status && !response.data) {
          resolve(response);
        } else {
          reject(new Error('Something went wrong'));
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
