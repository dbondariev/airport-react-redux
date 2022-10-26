import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import SearchFlight from './search/components/searchFlight/SearchFlight';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SearchFlight />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
