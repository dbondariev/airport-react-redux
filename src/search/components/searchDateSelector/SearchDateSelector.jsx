import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { parseUrl } from '../../../utils/utils';
import './search-date-selector.scss';

const SearchDateSelector = ({ selectDate, selectThreeDays }) => {
  const url = parseUrl(useLocation().pathname.concat(useLocation().search));

  const yesterday = moment(new Date()).subtract(1, 'd');
  const today = new Date();
  const tomorrow = moment(new Date()).add(1, 'd');

  return (
    <div className="search-result__calendar">
      <div className="search-result__calendar__date">
        <label htmlFor="search-date">{moment(url.date, 'DD-MM-YYYY').format('DD/MM')}</label>
        <div className="calendar-ico" id="search-date">
          <i className="fas fa-calendar-days"></i>
          <form className="event-form">
            <input className="search-calendar_datapicker" type="date" onInput={selectDate} />
          </form>
        </div>
      </div>

      <div className={'search-result__calendar__dates'}>
        <div
          className={
            url.date === moment(yesterday).format('DD-MM-YYYY')
              ? 'date-today three-days active'
              : 'date-today three-days'
          }
          data-date={moment(yesterday).format('YYYY-MM-DD')}
          onClick={selectThreeDays}
        >
          <div className="date-num">{moment(yesterday).format('DD/MM')}</div>
          <div className="date-title">yesterday</div>
        </div>
        <div
          className={
            url.date === moment(today).format('DD-MM-YYYY') ? 'date-today three-days active' : 'date-today three-days'
          }
          data-date={moment(today).format('YYYY-MM-DD')}
          onClick={selectThreeDays}
        >
          <div className="date-num">{moment(today).format('DD/MM')}</div>
          <div className="date-title">today</div>
        </div>
        <div
          className={
            url.date === moment(tomorrow).format('DD-MM-YYYY')
              ? 'date-today three-days active'
              : 'date-today three-days'
          }
          data-date={moment(tomorrow).format('YYYY-MM-DD')}
          onClick={selectThreeDays}
        >
          <div className="date-num">{moment(tomorrow).format('DD/MM')}</div>
          <div className="date-title">tomorrow</div>
        </div>
      </div>
    </div>
  );
};

export default SearchDateSelector;
