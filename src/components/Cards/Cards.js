/* this component has materialUI cards that display the
number of infected people, recovered people, and deaths
*/
import React, { Component } from 'react';
import Countup from 'react-countup';
import {Grid} from '@material-ui/core'

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if(!confirmed) {
        return 'loading'
    }
    
    return (
        <>
        <h3>Last update date: {new Date(lastUpdate).toDateString()} </h3>
        <Grid container spacing={1}>
            <Grid item xs={4}>
            <h4>Confirmed cases </h4>
            <Countup duration={3} separator=',' start={0} end={confirmed.value}/>
            </Grid>

            <Grid item xs={4}>
            <h4> Recovered cases</h4>
            <Countup duration={3} separator=',' start={0} end={recovered.value}/>
            </Grid>

            <Grid item xs={4}>
            <h4> Deaths </h4>
            <Countup duration={3} separator=',' start={0} end={deaths.value}/>
            </Grid>
        </Grid>
        </>
    )
}

export default Cards