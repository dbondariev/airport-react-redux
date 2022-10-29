import React from 'react';
import { useLocation } from 'react-router-dom';
import './search-navigation.scss';
const SearchNavigation = ({ selectFlightType }) => {
	const { pathname } = useLocation();

	return (
		<div className='search-result__nav'>
			<div
				className={
					pathname === '/departures'
						? 'search-result__nav__departures nav_active'
						: 'search-result__nav__departures'
				}
				onClick={() => selectFlightType('/departures')}
			>
				<span data-v-7746f986='' className='icon'>
					<i className='fas fa-plane-departure'></i>
					DEPARTURES
				</span>
			</div>

			<div
				className={
					pathname === '/arrivals'
						? 'search-result__nav__arrivals nav_active'
						: 'search-result__nav__arrivals'
				}
				onClick={() => selectFlightType('/arrivals')}
			>
				<span data-v-7746f986='' className='icon'>
					<i className='fas fa-plane-arrival'></i> ARRIVALS
				</span>
			</div>
		</div>
	);
};

export default SearchNavigation;
