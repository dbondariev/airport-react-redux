import React from 'react';
import './search-bar.scss';

const SearchBar = ({ searchHandle, searchParam }) => {
<<<<<<< HEAD
  return (
    <div className="search-action">
      <h1 className="search-action__title">SEARCH FLIGHT</h1>
      <form className="search-action__bar" onSubmit={searchHandle}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          className="search-action__input"
          type="text"
          name="search"
          defaultValue={searchParam}
          placeholder="Airline, destination or flight #"
        />
        <button className="search-action__btn" type="submit">
          SEARCH
        </button>
      </form>
    </div>
  );
=======
	return (
		<div className='search-action'>
			<h1 className='search-action__title'>SEARCH FLIGHT</h1>
			<form className='search-action__bar' onSubmit={searchHandle}>
				<i className='fa-solid fa-magnifying-glass'></i>
				<input
					className='search-action__input'
					type='text'
					name='search'
					defaultValue={searchParam}
					placeholder='Airline, destination or flight #'
				/>
				<button className='search-action__btn' type='submit'>
					SEARCH
				</button>
			</form>
		</div>
	);
>>>>>>> f322fa7 (formated and uploaded to netify)
};

export default SearchBar;
