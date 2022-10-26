import * as searchGateway from './searchGateway';

export const SEARCH_LIST_RECIEVED = 'SEARCH_LIST_RECIEVED';

export const searchListRecieved = (searchList) => {
  const action = {
    type: SEARCH_LIST_RECIEVED,
    payload: {
      searchList,
    },
  };

  return action;
};

export const getSearchList = (date) => {
  const thunkAction = function (dispatch) {
    searchGateway.fetchSearchList(date).then((searchList) => {
      dispatch(searchListRecieved(searchList));
    });
  };
  return thunkAction;
};
