import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/';

export const fetchSearchList = (date) => {
  const formatDate = moment(date).format('DD-MM-YYYY');
  return fetch(`${baseUrl}${formatDate}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};
