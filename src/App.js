import React, {Component} from 'react';
import './App.css';
import {Home, About, Contact,
  Cards, PieChart, BarChart, LineChart,Today, SideMenu,
  DataTable, Donut, NavbarMenu, WorldMap} from './components'
import {fetchData, fetchGender, fetchToday, fetchStats, cardsData, tableData, fetchDailyData} from './data/'
import {Grid, Paper, TableCell, Drawer, List, ListItem, ListItemIcon, ListItemText,
Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { black } from 'color-name';
import HomeIcon from "@material-ui/icons/Home";
import RoomIcon from '@material-ui/icons/Room';
import TableChartIcon from '@material-ui/icons/TableChart';
class App extends Component {
  state = {
    data: {},
    country:'',
    gender: {},
    today:{},

    loading: false,
    stats:[], 

    mapInfo: [],
    dailyData:{},
    sideMenuOpen: false
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data});

    const gender = await fetchGender();
    this.setState({gender});

    const casesToday = await fetchToday();
    //const today = casesToday.results[0].total_new_cases_today;
    //this.setState({today:today})
    const url = 'https://coronavirus-19-api.herokuapp.com/countries'
    this.setState({loading:true})
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({stats:data, loading:false})
    })

    //const url2 = 'https://api.covid19api.com/all'
    const url2 = 'https://corona.lmao.ninja/v2/countries'
    fetch(url2)
    .then(res => res.json())
    .then(data2 => {
      this.setState({mapInfo:data2})
    })

    /* daily data
    const daily = await fetchDailyData();
    this.setState({dailyData: daily})*/
  }

    // change the state of the country [chosen from options]
    handleChange = async(country) => {
    const data = await fetchData(country);
    this.setState({data, country: country});

    //const all = {data, country: country};
    //return all;
  }


  // menu handler
  togglerClickHandler = () => {
    this.setState((prevState) => {
      return {sideMenuOpen: !prevState.sideMenuOpen}
    });
  }

  render() {
    const {data, country, gender, today, stats, mapInfo} = this.state;
    const classes = makeStyles((theme) => ({
      drawerPaper: {width: 'inherit'},
      link: {
        textDecoration: 'none', 
        color: theme.palette.text.primary
      }
    }));

  return (
    <Router>
      <div style={{display: 'flex'}}>
        <Drawer
        style={{width: '130px'}}
        variant="persistent" // always going to be there
        anchor="left"
        classes={{paper: classes.drawerPaper}}
        open={true}
        >
          <List>
            <Link to="/" className={classes.link} style={{ textDecoration: 'none' ,
                  color: 'black',
          }}>
              <ListItem button>
              <ListItemIcon>
                    <HomeIcon />
              </ListItemIcon>
                <ListItemText primary={"Home"}>
                </ListItemText>
              </ListItem>
            </Link>

            <Link to="/Map" className={classes.link} style={{ textDecoration: 'none' ,
                  color: 'black'
          }}>
              <ListItem button>
              <ListItemIcon>
                    <RoomIcon />
              </ListItemIcon>
                <ListItemText primary={"Map"}>
                </ListItemText>
              </ListItem>
            </Link>

            <Link to="/Table" className={classes.link} style={{ textDecoration: 'none' ,
                  color: 'black'
          }}>
              <ListItem button>
              <ListItemIcon>
                    <TableChartIcon />
              </ListItemIcon>

                <ListItemText primary={"Table"}>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </Drawer>

        <Switch>
          <Route exact path="/">
            <Container>
              <Typography variant="h5" gutterBottom>
                <Cards data={data}/>
              </Typography>
              <Typography variant="body1" gutterBottom>
              <div className={classes.root}>
              <Grid container spacing={1}>

                <Grid item xs={12} lg={6} md={6}>
                    <Paper className={classes.paper}><PieChart handleChange={this.handleChange} data={data}/></Paper>
                </Grid>

                <Grid item xs={12} lg={6} md={6}>
                  <Paper className={classes.paper}> <Donut stats={stats}/> </Paper>
                </Grid>

                <Grid item xs ={12} lg={6} md={6}>
                  <Paper className={classes.paper}><BarChart gender={gender}/></Paper></Grid>
                <Grid item xs={12} lg={6} md={6}>
                  <Paper className={classes.paper}><LineChart gender={gender}/></Paper></Grid>
                </Grid>
                </div>
              </Typography>
            </Container>
          </Route>

          <Route exact path="/Map">
            <Container>
              <Typography variant="h3" gutterBottom>
              </Typography>
              <Typography variant="body1" gutterBottom>
              <Grid container spacing={1}>
              <Grid item xs={12}><Paper className={classes.paper}><WorldMap mapInfo={mapInfo}/></Paper> </Grid>
              </Grid>
              </Typography>
          </Container>
          </Route>

          <Route exact path="/Table">
            <Container variant="h3 gutterBottom">
              <Typography variant="body1" gutterBottom>
                <Grid item xs={12}><Paper className={classes.paper}><DataTable stats={stats}/></Paper></Grid>
              </Typography>
            </Container>
          </Route>
        </Switch>
      </div>


    {/*<div className={classes.root}>
      <Grid container spacing={1}>

        <Grid item xs={3}>
            <Paper className={classes.paper}><PieChart handleChange={this.handleChange} data={data}/></Paper>
        </Grid>
        
        <Grid item xs={3}>
          <Paper className={classes.paper}> <Donut stats={stats}/> </Paper>
        </Grid>

        <Grid item xs ={6}>
          <Paper className={classes.paper}><BarChart gender={gender}/></Paper></Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}><LineChart gender={gender}/></Paper></Grid>

        <Grid item xs={6}><Paper className={classes.paper}><WorldMap mapInfo={mapInfo}/></Paper> </Grid>
        <Grid item xs={12}><Paper className={classes.paper}><DataTable stats={stats}/></Paper></Grid>

      </Grid> */}


      {/*BarChart gender={gender}/>
      <PieChart handleChange={this.handleChange} data={data}/>
      <LineChart gender={gender}/>
      <WorldMap mapInfo={mapInfo}/>
      <DataTable stats={stats}/>
      <Grid container spacing={3}>
      <Grid item xs={12} sm={6}> </Grid>
      <Grid item xs={12} sm={6}>  </Grid>
      <Grid item xs={12} sm={6}>  </Grid>*/}

      
      {/* ****************ADD STYLES*************** *
      </div><Grid container spacing={3}>*/}
        {/*<Grid item xs={12}>
          <Paper>
            <Cards data={data}/>
          </Paper>
        </Grid>*

        <Grid item xs={12} sm={6}>
            <PieChart handleChange={this.handleChange} data={data}/>
        </Grid>

        <Grid item xs={12} sm={6}>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper>
            <LineChart gender={gender}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <WorldMap mapInfo={mapInfo}/>
        </Grid>
  </Grid>*/}
  {/*
  <Donut stats={stats}/>
    <LineChart/>
        <WorldMap mapInfo={mapInfo}/>
            <DataTable stats={stats}/>
            this method didn't work
  <Router>
    {/*<NavbarMenu/>*
    <SideMenu/>
  </Router>
      <Grid container direction={'column'} spacing={24}>
    <Router>
    <SideMenu/>
    </Router>
    </Grid>
    
    </div>*/}

</Router>

  );
  }
}

export default App;
