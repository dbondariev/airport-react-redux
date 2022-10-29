import { createSelector } from 'reselect';

export const flightListSelector = (state) => {
  return state.search.searchList;
};
