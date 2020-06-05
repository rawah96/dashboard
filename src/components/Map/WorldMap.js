import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
                color:'grey',
                backgroundColor: 'black',
                height:'25px',
                width:'35px'
            }}
          >
            {item.cases}
          </div>
      )
    } 
    )

    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDmUbRo3tmxCw-EK5n3ov72EzOI1VH-FzI'}}
        defaultCenter={{
            lat: 59.95,
            lng: 30.33  
        }}
            defaultZoom={10}>
            {Mapping}
        </GoogleMapReact>
        </div>
        )
}

export default WorldMap