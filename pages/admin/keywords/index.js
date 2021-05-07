import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import MaterialTable from '../../../components/MaterialTable';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Tooltip from '@material-ui/core/Tooltip';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
  },
  item: {
    width: '100%',
    marginBottom: '2em',
  },
  dialogItem: {
    width: '100%',
  },
}));

const AdminKewordsList = () => {
  const classes = useStyles();
  useEffect(() => {
    setNameOfPage('Договора');
    getAll__CONTRACT();
  }, [getAll__CONTRACT, setNameOfPage]);

  const onDeleteItem = (id) => {
    delete__CONTRACT(id);
  };
  return <div></div>;
};

export default AdminKewordsList;
