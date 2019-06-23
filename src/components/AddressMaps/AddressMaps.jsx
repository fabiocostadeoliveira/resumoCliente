import React, { Component } from 'react'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './AddressMaps.css'

const mapStyles = {
    width: '280px',
    height: '140px'    
};

export class AddressMaps extends Component {
    render() {
      return (
        <div className="container-board">
            <div>
                <span className="title-board">Local</span>
            </div>                
            <div className="address-gloogle-maps" >
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    containerStyle={{position: 'relative'}}
                    initialCenter={{lat: this.props.center.lat, lng: this.props.center.lng }}
                    >
                    <Marker title={this.props.data.typeAddress} />
                </Map>
            </div>
            <IconLabelDetail 
                    title={`${this.props.data.nameStreet}, ${this.props.data.addressNumber}`}
                    subtitle={this.props.data.typeAddress}
                    containerStyle={"mt-2"}
                    icon={{icon:"map-marker-alt"}}
                    />
        </div>
        
      );
    }
  }

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCK1GUu4HlpeUZQfeC5B3O_ALBEuuD76fo'
})(AddressMaps);