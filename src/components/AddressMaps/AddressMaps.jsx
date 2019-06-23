import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './AddressMaps.css'


const mapStyles = {
    width: '280px',
    height: '140px'    
};

export class MapContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            stores: [{lat: this.props.data.lat, lng: this.props.data.lng}]}
    }

    render() {
      return (
        <div className="container-board">
            <div>
                <span className="title-board">Local</span>
            </div>                
            <div className="address-gloogle-maps" >
                <Map
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
                    containerStyle={{position: 'relative'}}
                    initialCenter={{
                    lat: this.props.center.lat, 
                    lng: this.props.center.lng
                    }}
                    
                >
                <Marker name={'Current location'} />
                </Map>
            </div>
            <IconLabelDetail 
                    title={`${this.props.data.nameStreet}, ${this.props.data.addressNumber}`}
                    subtitle={this.props.data.typeAddress}
                    icon={{icon:"map-marker-alt"}}
                    />
        </div>
        
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCK1GUu4HlpeUZQfeC5B3O_ALBEuuD76fo'
})(MapContainer);
