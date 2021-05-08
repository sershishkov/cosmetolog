import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { setNameOfPage } from '../../../reduxStore/actions/nameOfPage';
import { addOne__KEYWORD } from '../../../reduxStore/actions/admin/keyword';

import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: theme.breakpoints.width('sm'),
    width: '100%',
    margin: 'auto',
  },
}));

const KEYWORD__Add = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state__nameOfPage = useSelector((state) => state.nameOfPage.pageName);
  const router = useRouter();

  const [formData, setFormData] = useState({
    keyWord_text: '',
  });
  const [keyWord_text__Helper, set__keyWord_text__Helper] = useState('');

  const { keyWord_text } = formData;

  const clearFormData = () => {
    setFormData({
      keyWord_text: '',
    });
  };
  useEffect(() => {
    dispatch(setNameOfPage('Добавить ключевое слово'));
  }, [dispatch]);

  const onSubmit = () => {
    dispatch(addOne__KEYWORD(keyWord_text));

    clearFormData();
    router.back();
  };

  const onChangeHandler = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });

    let valid;
    switch (event.target.id) {
      case 'keyWord_text':
        valid = event.target.value.length >= 3;
        if (!valid) {
          set__keyWord_text__Helper('Минимальная длина 3 знака');
        } else {
          set__keyWord_text__Helper('');
        }
        break;

      default:
        break;
    }
  };

  return (
    <Grid container className={classes.root} direction='column'>
      <Tooltip title='Назад'>
        <Fab
          color='secondary'
          aria-label='go Back'
          onClick={() => router.back()}
        >
          <ArrowBackIcon />
        </Fab>
      </Tooltip>

      <Grid item className={classes.item}>
        <Typography variant='h3' align='center'>
          {state__nameOfPage && state__nameOfPage}
        </Typography>
      </Grid>

      <Grid item className={classes.item}>
        <TextField
          autoFocus
          id='keyWord_text'
          name='keyWord_text'
          label='Ключевое слово'
          type='text'
          value={keyWord_text ? keyWord_text : ''}
          error={keyWord_text__Helper.length !== 0}
          helperText={keyWord_text__Helper}
          fullWidth
          autoComplete='text'
          onChange={(e) => onChangeHandler(e)}
        />
      </Grid>

      <Grid item className={classes.item}>
        <Button
          disabled={!keyWord_text || keyWord_text__Helper.length !== 0}
          fullWidth
          variant='contained'
          onClick={() => onSubmit()}
          color='primary'
        >
          Добавить
        </Button>
      </Grid>
    </Grid>
  );
};

export default KEYWORD__Add;
