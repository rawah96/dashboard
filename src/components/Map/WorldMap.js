import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Countup from 'react-countup'

//const AnyReactComponent = ({ text }) => <div>{text}</div>;
const WorldMap  = ({mapInfo}) => {
    if(!mapInfo) {
        return 'loading'
    }

    // Lat & Lon & Country
    const Mapping = mapInfo.map((item, i) => {
      return(
          <div
            lat={item.countryInfo.lat}
            lng={item.countryInfo.long}
            style = {{
                color:'white',
                backgroundColor: '#CC68C8',
                height:'25px',
                width:'35px',
                textAlign: 'center',
                borderRadius:"50%"
            }}>

              <h5><br/>
                <Countup
                start={item.cases}
                end={item.cases}
                separator=','
                /></h5>
          </div>)})

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDmUbRo3tmxCw-EK5n3ov72EzOI1VH-FzI'}}
        defaultCenter={{
            lat: 59.95,
            lng: 30.33  
        }}
            defaultZoom={4.5}
            >
            {Mapping}
        </GoogleMapReact>
        </div>
        )
}

export default WorldMap