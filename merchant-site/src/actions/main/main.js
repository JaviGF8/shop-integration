import axios from 'axios';

export const MAIN_TYPES = {
  GET_CREDIT_AGREEMENTS: 'GET_CREDIT_AGREEMENTS',
};

const getCreditAgreement = () => (dispatch) =>
  new Promise((resolve, reject) => {
    axios
      .get('http://localhost:8080/credit_agreements?totalWithTax=15000')
      .then((response) => {
        dispatch({ type: MAIN_TYPES.GET_CREDIT_AGREEMENTS, creditAgreements: response.data });
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });

export const initializeData = () => (dispatch) => {
  dispatch(getCreditAgreement());
};

export const setEvent = (event) => () =>
  new Promise((resolve, reject) => {
    axios
      .post('http://localhost:8080/events', event)
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
