import React, { Component } from 'react';
import Countup from 'react-countup';
import {Grid} from '@material-ui/core'

const Today = ({today}) => {
    if(!today) {
        return 'loading..'
    }
    var num = parseInt(today)

    return (
        num?    
        <Countup
        start={0}
        end={today}
        separator=','
        duration={2.5}/> : null
        )
}

export default Today;