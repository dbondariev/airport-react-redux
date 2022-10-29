import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/';

export const fetchSearchList = async (date) => {
  const formatDate = moment(date).format('DD-MM-YYYY');
  const response = await fetch(`${baseUrl}${formatDate}`);
  if (response.ok) {
    return response.json();
  }
};
