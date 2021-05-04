import { nameOfPage__Actions } from '../reducers/nameOfPage';

// import { setAlert } from './alert';

export const setNameOfPage = (pageName) => (dispatch) => {
  dispatch(nameOfPage__Actions.setPage({ pageName }));
  // dispatch(setAlert(`Cтраница: ${pageName}`, 'success'));
};
