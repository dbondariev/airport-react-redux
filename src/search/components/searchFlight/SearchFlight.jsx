import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

import * as searchActions from '../../search.actions';
import { flightListSelector } from '../../search.selectors';

import SearchBar from '../searchBar/SearchBar';
import SearchNavigation from '../searchNavigation/SearchNavigation';
import SearchDateSelector from '../searchDateSelector/SearchDateSelector';
import SearchResultsTable from '../searchResultsTable/SearchResultsTable';
import { parseUrl } from '../../../utils/utils';
import './search-flight.scss';

const SearchFlight = ({ searchList, getSearchList }) => {
<<<<<<< HEAD
  const url = parseUrl(useLocation().pathname.concat(useLocation().search));
  console.log('url: ', url);
  const startLoadParams = {
    path: url.pathname === '/' ? '/departures' : url.pathname,
    date: url.date || moment(new Date()).format('DD-MM-YYYY'),
    search: url.search || '',
  };

  const [flightType, setFlightType] = useState(startLoadParams.path);
  const [flightDate, setFlightDate] = useState(startLoadParams.date);
  const [flightSearch, setFlightSearch] = useState(startLoadParams.search);

  const handleFlightType = (type) => {
    setFlightType(type);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if (!formData.search) {
      setFlightSearch(``);
      return;
    }

    setFlightSearch(formData.search);
  };

  const handleDateSelect = (e) => {
    const date = new Date(e.target.value);
    setFlightDate(moment(date).format('DD-MM-YYYY'));
    getSearchList(date);
  };

  const handleThreeDaysSelect = (e) => {
    const date = new Date(e.target.closest('.three-days').dataset.date);
    setFlightDate(moment(date).format('DD-MM-YYYY'));
    getSearchList(date);
  };

  useEffect(() => {
    const startDate = moment(flightDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
    getSearchList(new Date(startDate));
  }, []);

  return (
    <section className="search-flight">
      <div className="search-page">
        <SearchBar searchHandle={handleSearch} searchParam={flightSearch} />

        <div className="search-result">
          <Redirect to={`${flightType}?date=${flightDate}${flightSearch && `&search=${flightSearch}`}`} />

          <Route path={'/departures'}>
            <SearchNavigation selectFlightType={handleFlightType} />
          </Route>
          <Route path={'/arrivals'}>
            <SearchNavigation selectFlightType={handleFlightType} />
          </Route>

          <SearchDateSelector selectDate={handleDateSelect} selectThreeDays={handleThreeDaysSelect} />
          {searchList && <SearchResultsTable searchList={searchList.body} />}
        </div>
      </div>
    </section>
  );
};

const mapDispatch = {
  getSearchList: searchActions.getSearchList,
};

const mapState = (state) => {
  return {
    searchList: flightListSelector(state),
  };
=======
	const url = parseUrl(useLocation().pathname.concat(useLocation().search));
	console.log('url: ', url);
	const startLoadParams = {
		path: url.pathname === '/' ? '/departures' : url.pathname,
		date: url.date || moment(new Date()).format('DD-MM-YYYY'),
		search: url.search || '',
	};

	const [flightType, setFlightType] = useState(startLoadParams.path);
	const [flightDate, setFlightDate] = useState(startLoadParams.date);
	const [flightSearch, setFlightSearch] = useState(startLoadParams.search);

	const handleFlightType = type => {
		setFlightType(type);
	};

	const handleSearch = e => {
		e.preventDefault();
		const formData = Object.fromEntries(new FormData(e.target));

		if (!formData.search) {
			setFlightSearch(``);
			return;
		}

		setFlightSearch(formData.search);
	};

	const handleDateSelect = e => {
		const date = new Date(e.target.value);
		setFlightDate(moment(date).format('DD-MM-YYYY'));
		getSearchList(date);
	};

	const handleThreeDaysSelect = e => {
		const date = new Date(e.target.closest('.three-days').dataset.date);
		setFlightDate(moment(date).format('DD-MM-YYYY'));
		getSearchList(date);
	};

	useEffect(() => {
		const startDate = moment(flightDate, 'DD-MM-YYYY').format('YYYY-MM-DD');
		getSearchList(new Date(startDate));
	}, []);

	return (
		<section className='search-flight'>
			<div className='search-page'>
				<SearchBar searchHandle={handleSearch} searchParam={flightSearch} />

				<div className='search-result'>
					<Redirect
						to={`${flightType}?date=${flightDate}${
							flightSearch && `&search=${flightSearch}`
						}`}
					/>

					<Route path={'/departures'}>
						<SearchNavigation selectFlightType={handleFlightType} />
					</Route>
					<Route path={'/arrivals'}>
						<SearchNavigation selectFlightType={handleFlightType} />
					</Route>

					<SearchDateSelector
						selectDate={handleDateSelect}
						selectThreeDays={handleThreeDaysSelect}
					/>
					{searchList && <SearchResultsTable searchList={searchList.body} />}
				</div>
			</div>
		</section>
	);
};

const mapDispatch = {
	getSearchList: searchActions.getSearchList,
};

const mapState = state => {
	return {
		searchList: flightListSelector(state),
	};
>>>>>>> f322fa7 (formated adn uploaded to netify)
};

export default connect(mapState, mapDispatch)(SearchFlight);
