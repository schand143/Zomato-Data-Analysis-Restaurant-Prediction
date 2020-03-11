import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chart from 'react-google-charts';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    width: 180
  },
  media: {
    height: 50
  },
  root: {
    flexGrow: 1
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [locality, setLocality] = React.useState('');
  const [avgCost, setAvgCost] = React.useState('');
  const [event, setEvent] = React.useState('');
  const [spacing, setSpacing] = React.useState(2);
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
        <Typography gutterBottom variant='h5' component='h2'>
          Prediction Raring is : 5
        </Typography>

        {/* -------------------  Locality ----------------------- */}
        <FormControl required className={classes.formControl}>
          <InputLabel id='demo-simple-select-required-label'>
            Locality
          </InputLabel>
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

        {/* -------------------  Is Delivering Now ----------------------- */}

        <div>
          {' '}
          <Chart
            width={'500px'}
            height={'300px'}
            chartType='BarChart'
            loader={<div>Loading Chart</div>}
            data={[
              [
                'Element',
                'Food',
                { role: 'style' },
                {
                  sourceColumn: 0,
                  role: 'annotation',
                  type: 'string',
                  calc: 'stringify'
                }
              ],
              ['North-India', 10, '#b87333', null],
              ['South-Indian', 15, 'silver', null],
              ['Chinese', 26, 'gold', null],
              ['Biryani', 35, 'color: #e5e4e2', null],
              ['Fast Food', 25, 'color: #72CBF3', null],
              ['Italian', 65, 'color: #8E44AD', null]
            ]}
            options={{
              title: 'Famous Menu',
              width: 880,
              height: 300,
              bar: { groupWidth: '55%' },
              legend: { position: 'none' }
            }}
            // For tests
            rootProps={{ 'data-testid': '6' }}
          />
        </div>

        {/* ------------------------- Online Delivery --------------------------- */}
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={4}>
            <Grid container justify='center' spacing={spacing}>
              <Grid>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title='Contemplative Reptile'
                  />
                  <Chart
                    width={'250px'}
                    height={'150px'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Yes', 11],
                      ['No', 19]
                    ]}
                    options={{
                      title: 'Online Delivery',
                      // Just add this option
                      is3D: true
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
          {/* ------------------------- Table booking --------------------------- */}
          <Grid item xs={4}>
            <Grid container justify='center' spacing={spacing}>
              <Grid>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title='Contemplative Reptile'
                  />
                  <Chart
                    width={'250px'}
                    height={'150px'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Yes', 11],
                      ['No', 12]
                    ]}
                    options={{
                      title: 'Table Booking',
                      // Just add this option
                      is3D: true
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                  <CardContent></CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
          {/* ------------------------- Delivering Now --------------------------- */}
          <Grid item xs={4}>
            <Grid container justify='center' spacing={spacing}>
              <Grid>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title='Contemplative Reptile'
                  />
                  <Chart
                    width={'250px'}
                    height={'150px'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Yes', 15],
                      ['No', 36]
                    ]}
                    options={{
                      title: 'Delivering Now',
                      // Just add this option
                      is3D: true
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={4}>
            <Grid container justify='center' spacing={spacing}>
              <Grid>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title='Contemplative Reptile'
                  />
                  <img
                    src={require('./image/img_avatar.png')}
                    alt='profile'
                    className='img'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify='center' spacing={spacing}>
              <Grid>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title='Contemplative Reptile'
                  />
                  <img
                    src={require('./image/img_avatar.png')}
                    alt='profile'
                    className='img'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container justify='center' spacing={spacing}>
              <Grid>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    title='Contemplative Reptile'
                  />
                  <img
                    src={require('./image/img_avatar.png')}
                    alt='profile'
                    className='img'
                  />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      Lizard
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      Lizards are a widespread group
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
