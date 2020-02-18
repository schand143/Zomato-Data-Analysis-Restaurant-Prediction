import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+'
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: 180
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [locality, setLocality] = React.useState('');
  const [avgCost, setAvgCost] = React.useState('');
  const [event, setEvent] = React.useState('');

  const handleChangeLocation = event => {
    setLocality(event.target.value);
  };

  const handleChangeAvgCost = event => {
    setAvgCost(event.target.value);
  };

  const handleChange = event => {
    setEvent(event.target.value);
  };

  return (
    <div className='App'>
      <h1 className='h1'>Zomato Data Analysis & Restaurant Prediction </h1>
      {/* -------------------  Locality ----------------------- */}
      <FormControl required className={classes.formControl}>
        <InputLabel id='demo-simple-select-required-label'>Locality</InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          value={locality}
          onChange={handleChangeLocation}
          className={classes.selectEmpty}
          autoWidth
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Kothrud'}>Kothrud</MenuItem>
          <MenuItem value={'Aundh'}>Aundh</MenuItem>
          <MenuItem value={'Parvati'}>Parvati</MenuItem>
        </Select>
      </FormControl>

      {/* -------------------  Average cost for two ----------------------- */}
      <FormControl required className={classes.formControl}>
        <InputLabel id='demo-simple-select-required-label'>
          Average Cost
        </InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          value={avgCost}
          onChange={handleChangeAvgCost}
          className={classes.selectEmpty}
          autoWidth
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={200}>200</MenuItem>
          <MenuItem value={400}>400</MenuItem>
          <MenuItem value={600}>600</MenuItem>
          <MenuItem value={800}>800</MenuItem>
          <MenuItem value={1000}>1000</MenuItem>
          <MenuItem value={1200}>1200</MenuItem>
        </Select>
      </FormControl>

      {/* -------------------  Has Table booking ----------------------- */}
      <FormControl required className={classes.formControl}>
        <InputLabel id='demo-simple-select-required-label'>
          Has Table booking
        </InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          value={event}
          onChange={handleChange}
          className={classes.selectEmpty}
          autoWidth
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Yes</MenuItem>
          <MenuItem value={0}>No</MenuItem>
        </Select>
      </FormControl>

      {/* -------------------  Has Online Delivery ----------------------- */}
      <FormControl required className={classes.formControl}>
        <InputLabel id='demo-simple-select-required-label'>
          Has Online Delivery
        </InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          value={event}
          onChange={handleChange}
          className={classes.selectEmpty}
          autoWidth
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Yes</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>

      {/* -------------------  Is Delivering Now ----------------------- */}
      <FormControl required className={classes.formControl}>
        <InputLabel id='demo-simple-select-required-label'>
          Is Delivering Now
        </InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          value={event}
          onChange={handleChange}
          className={classes.selectEmpty}
          autoWidth
        >
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Yes</MenuItem>
          <MenuItem value={20}>No</MenuItem>
        </Select>
      </FormControl>

      <div className='App'>
        <InputLabel size='medium'>Current Rating</InputLabel>
        <Rating
          name='hover-feedback'
          value={value}
          precision={4}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
          // onChangeActive={(event, newHover) => {
          //   setHover(newHover);
          // }}
        />
        {value !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
      </div>
    </div>
  );
}
