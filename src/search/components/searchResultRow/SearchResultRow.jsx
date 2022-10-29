import React from 'react';
import moment from 'moment';
import './search-result-row.scss';

const SearchResultRow = ({ flightData, flightTypeUrl }) => {
<<<<<<< HEAD
  const flight =
    flightTypeUrl === '/departures'
      ? {
          terminal: flightData.term,
          localTime: moment(flightData.timeDepShedule).format('HH:mm'),
          destination: flightData['airportToID.city_en'],
          status: `Departed at ${moment(flightData.timeTakeofFact).format('HH:mm')}`,
          airlineLogo: flightData.airline.en.logoSmallName,
          airlineName: flightData.airline.en.name,
          flight: flightData['carrierID.IATA']
            ? `${flightData['carrierID.IATA']}${flightData.fltNo}`
            : `${flightData['carrierID.code']}${flightData.fltNo}`,
        }
      : {
          terminal: flightData.term,
          localTime: moment(flightData.timeStandCalc).format('HH:mm'),
          destination: flightData['airportFromID.city_en'],
          status: `Landed ${moment(flightData.timeStandFact).format('HH:mm')}`,
          airlineLogo: flightData.airline.en.logoSmallName,
          airlineName: flightData.airline.en.name,
          flight: flightData['carrierID.IATA']
            ? `${flightData['carrierID.IATA']}${flightData.fltNo}`
            : `${flightData['carrierID.code']}${flightData.fltNo}`,
        };

  return (
    <tr>
      <td className="terminal-field">
        <span className={flight.terminal === 'A' ? 'term-a' : 'term-d'}>{flightData.term}</span>
      </td>
      <td className="time-field">
        <span>{flight.localTime}</span>
      </td>
      <td className="way-field">
        <span>{flight.destination}</span>
      </td>
      <td className="status-field">
        <span>{flight.status}</span>
      </td>
      <td className="company-field">
        <div className="company-field__logo">
          <img src={flight.airlineLogo} alt="Wizz Air" />
        </div>
        <span>{flight.airlineName}</span>
      </td>
      <td className="flight-field">
        <span>{flight.flight}</span>
      </td>
      <td className="flight-details">
        <span>Flight details</span>
      </td>
    </tr>
  );
=======
	const flight =
		flightTypeUrl === '/departures'
			? {
					terminal: flightData.term,
					localTime: moment(flightData.timeDepShedule).format('HH:mm'),
					destination: flightData['airportToID.city_en'],
					status: `Departed at ${moment(flightData.timeTakeofFact).format('HH:mm')}`,
					airlineLogo: flightData.airline.en.logoSmallName,
					airlineName: flightData.airline.en.name,
					flight: flightData['carrierID.IATA']
						? `${flightData['carrierID.IATA']}${flightData.fltNo}`
						: `${flightData['carrierID.code']}${flightData.fltNo}`,
			  }
			: {
					terminal: flightData.term,
					localTime: moment(flightData.timeStandCalc).format('HH:mm'),
					destination: flightData['airportFromID.city_en'],
					status: `Landed ${moment(flightData.timeStandFact).format('HH:mm')}`,
					airlineLogo: flightData.airline.en.logoSmallName,
					airlineName: flightData.airline.en.name,
					flight: flightData['carrierID.IATA']
						? `${flightData['carrierID.IATA']}${flightData.fltNo}`
						: `${flightData['carrierID.code']}${flightData.fltNo}`,
			  };

	return (
		<tr>
			<td className='terminal-field'>
				<span className={flight.terminal === 'A' ? 'term-a' : 'term-d'}>
					{flightData.term}
				</span>
			</td>
			<td className='time-field'>
				<span>{flight.localTime}</span>
			</td>
			<td className='way-field'>
				<span>{flight.destination}</span>
			</td>
			<td className='status-field'>
				<span>{flight.status}</span>
			</td>
			<td className='company-field'>
				<div className='company-field__logo'>
					<img src={flight.airlineLogo} alt='Wizz Air' />
				</div>
				<span>{flight.airlineName}</span>
			</td>
			<td className='flight-field'>
				<span>{flight.flight}</span>
			</td>
			<td className='flight-details'>
				<span>Flight details</span>
			</td>
		</tr>
	);
>>>>>>> f322fa7 (formated adn uploaded to netify)
};

export default SearchResultRow;
