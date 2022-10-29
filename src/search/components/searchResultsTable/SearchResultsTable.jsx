import React from 'react';
import { useLocation } from 'react-router-dom';
import SearchResultRow from '../searchResultRow/SearchResultRow';
import SearchNoFlight from '../searchNoFlight/SearchNoFlight';
import './search-results-table.scss';
import { parseUrl } from '../../../utils/utils';

const SearchResultTable = ({ searchList }) => {
<<<<<<< HEAD
  const url = parseUrl(useLocation().pathname.concat(useLocation().search));
  const selectFlightData = url.pathname === '/departures' ? 'departure' : 'arrival';

  const flightList =
    selectFlightData === 'departure'
      ? searchList[selectFlightData].filter((flight) => {
          return [
            flight.airline.en.name,
            flight['airportToID.city_en'],
            flight['carrierID.IATA']
              ? `${flight['carrierID.IATA']}${flight.fltNo}`
              : `${flight['carrierID.code']}${flight.fltNo}`,
          ].find((prop) => prop.toUpperCase().includes(url.search.toUpperCase()));
        })
      : searchList[selectFlightData].filter((flight) => {
          return [
            flight.airline.en.name,
            flight['airportFromID.city_en'],
            flight['carrierID.IATA']
              ? `${flight['carrierID.IATA']}${flight.fltNo}`
              : `${flight['carrierID.code']}${flight.fltNo}`,
          ].find((prop) => prop.toUpperCase().includes(url.search.toUpperCase()));
        });

  return (
    <div className="search-result__content">
      {flightList.length !== 0 ? (
        <table className="search-result__table">
          <thead>
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {flightList.map((flight) => (
              <SearchResultRow key={flight.ID} flightData={flight} flightTypeUrl={url.pathname} />
            ))}
          </tbody>
        </table>
      ) : (
        <SearchNoFlight />
      )}
    </div>
  );
=======
	const url = parseUrl(useLocation().pathname.concat(useLocation().search));
	const selectFlightData =
		url.pathname === '/departures' ? 'departure' : 'arrival';

	const flightList =
		selectFlightData === 'departure'
			? searchList[selectFlightData].filter(flight => {
					return [
						flight.airline.en.name,
						flight['airportToID.city_en'],
						flight['carrierID.IATA']
							? `${flight['carrierID.IATA']}${flight.fltNo}`
							: `${flight['carrierID.code']}${flight.fltNo}`,
					].find(prop => prop.toUpperCase().includes(url.search.toUpperCase()));
			  })
			: searchList[selectFlightData].filter(flight => {
					return [
						flight.airline.en.name,
						flight['airportFromID.city_en'],
						flight['carrierID.IATA']
							? `${flight['carrierID.IATA']}${flight.fltNo}`
							: `${flight['carrierID.code']}${flight.fltNo}`,
					].find(prop => prop.toUpperCase().includes(url.search.toUpperCase()));
			  });

	return (
		<div className='search-result__content'>
			{flightList.length !== 0 ? (
				<table className='search-result__table'>
					<thead>
						<tr>
							<th>Terminal</th>
							<th>Local time</th>
							<th>Destination</th>
							<th>Status</th>
							<th>Airline</th>
							<th>Flight</th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{flightList.map(flight => (
							<SearchResultRow
								key={flight.ID}
								flightData={flight}
								flightTypeUrl={url.pathname}
							/>
						))}
					</tbody>
				</table>
			) : (
				<SearchNoFlight />
			)}
		</div>
	);
>>>>>>> f322fa7 (formated adn uploaded to netify)
};

export default SearchResultTable;
