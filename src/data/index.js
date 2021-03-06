// fetching data here
/* postman URLs: 
https://thevirustracker.com/free-api?global=stats : global stats 
https://thevirustracker.com/timeline/map-data.json : country daily stats
https://covid2019-api.herokuapp.com/

*/
import Axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let changeableUrl = url;

  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }

  try {
    const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { countries } } = await Axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    return error;
  }
};

/*export const fetchAge = () => {
  const ages  = 'https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateByAge'
  fetch(ages)
  .then(res => res.json())
  .then(data => {
    const {table} = data;
    table.forEach(e => {
      const {DeathRateConfirmedCases, Genre} = e
      return {DeathRateConfirmedCases, Genre};    
    })
  })
}*/

export const fetchGender = async () => {
  const url  = 'https://covid19-server.chrismichael.now.sh/api/v1/FatalityRateBySex'
  try {
    const { data: { table } } = await Axios.get(url);
    return table.map((item) => 
    [item.DeathRateConfirmedCases, item.Genre]
    //item.DeathRateConfirmedCases
    );
  } catch (error) {
    return error;
  }
};

export const fetchToday = async () => {
  const url = 'https://api.thevirustracker.com/free-api?global=stats'
  try {
    const {data: {country, cases}} = await Axios.get(url)
    return {country, cases};
  } catch(error) {return error}
}

export const fetchDailyData = async() => {
  const dailyurl = 'https://covid19.mathdro.id/api/daily';
  try{
      const {data} = await Axios.get(dailyurl);
      return data.map(({confirmed, deaths, recovered, reportDate:date}) => ({
          confirmed: confirmed.total, recovered: recovered.total,
          deaths: deaths.total, date
      }));
   } catch(error) {return error;}
}

