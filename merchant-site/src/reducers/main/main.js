import { MAIN_TYPES } from '../../actions/main/main';

const initialState = {
  creditAgreements: null,
};

const main = (state = initialState, action) => {
  switch (action.type) {
    case MAIN_TYPES.GET_CREDIT_AGREEMENTS:
      return { ...state, creditAgreements: action.creditAgreements };
    default:
      return { ...state };
  }
};

export default main;
