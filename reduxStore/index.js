import { configureStore } from '@reduxjs/toolkit';

import nameOfPage from './reducers/nameOfPage';
import alerts from './reducers/alert';

const store = configureStore({
  reducer: {
    nameOfPage,
    alerts,
  },
});

export default store;
