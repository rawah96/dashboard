import React, {Component} from 'react';
import './App.css';
import {Cards, PieChart, LineChart, Today} from './components'
import {fetchData, fetchGender, fetchToday, fetchStats, cardsData} from './data/'

class App extends Component {
  state = {
    data: {},
    country:'',
    gender: {},
    today:{}
  }

  async componentDidMount() {
    const data = await fetchData();
    this.setState({data});

    const gender = await fetchGender();
    this.setState({gender});

    const casesToday = await fetchToday();
    //const today = casesToday.results[0].total_new_cases_today;
    //this.setState({today:today})
  }

    // change the state of the country [chosen from options]
  handleChange = async(country) => {
    const data = await fetchData(country);
    this.setState({data, country: country});
    //const all = {data, country: country};
    //return all;
  }

  render() {
    const {data, country, gender, today} = this.state;

  return (
    <div className="App">
      {/*<Cards data={data}/>
      <PieChart handleChange={this.handleChange}/>*/}
      <PieChart handleChange={this.handleChange} data={data}/>
      <LineChart gender={gender}/>
      <Today today={today}/>
      
    </div>
  );
  }
}

export default App;
