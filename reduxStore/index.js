import { configureStore } from '@reduxjs/toolkit';

import nameOfPage from './reducers/nameOfPage';
import alerts from './reducers/alert';

import keyword from './reducers/admin/keyword';

const store = configureStore({
  reducer: {
    nameOfPage,
    alerts,

    keyword,
  },
});

export default store;
