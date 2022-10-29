import moment from 'moment';

const baseUrl = 'https://api.iev.aero/api/flights/';

<<<<<<< HEAD
export const fetchSearchList = (date) => {
  const formatDate = moment(date).format('DD-MM-YYYY');
  return fetch(`${baseUrl}${formatDate}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
=======
export const fetchSearchList = async (date) => {
  const formatDate = moment(date).format('DD-MM-YYYY');
  const response = await fetch(`${baseUrl}${formatDate}`);
  if (response.ok) {
    return response.json();
  }
>>>>>>> f322fa7 (formated adn uploaded to netify)
};
