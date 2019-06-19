import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import './AddressMaps.css'


const mapStyles = {
    width: '280px',
    height: '160px'
};

export class MapContainer extends Component {

    constructor(props){
        super(props)
        this.state = {
            stores: [{lat: this.props.data.lat, lng: this.props.data.lng}]}
    }

/*
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }        
*/
    render() {
      return (
        <div className="container-board">
            <div>
                <h6><span>Local</span></h6>
            </div>                
            <div className="address-gloogle-maps" >
                <Map 
                    google={this.props.google}
                    zoom={13}
                    style={mapStyles}
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

/*
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class AddressMaps extends Component {

    constructor(props){
        super(props)
    }
    
    render(){
        //console.log('lat',Math.round(this.props.data.lat * 1000 ) /1000,'lng', this.props.data.lng)
        let latitude = this.props.data.lat ? this.props.data.lat.toFixed(2) : 0
        let longitude = this.props.data.lng ? this.props.data.lng.toFixed(2) : 0
        console.log('this.props.center', this.props.center)
        return(
            <div className="container-board">
                <div>
                    <h6><span>Local</span></h6>
                </div>                
                <div className="address-gloogle-maps" >
                    <GoogleMapReact                         
                        bootstrapURLKeys={{ key:'AIzaSyCK1GUu4HlpeUZQfeC5B3O_ALBEuuD76fo'}}
                        //bootstrapURLKeys={{ key:'AIzaSyAbRPyiXBXNZOKHWb__hVMG3LHntyB9ZVY'}}
                        center={{"lat": latitude, "lng": -48.61}}
                        zoom={11}>
                        <AnyReactComponent
                        lat={this.props.data.lat}
                        lng={this.props.data.lng}
                        text="bbbbbbbbbbbbbbb"
                        />
                    </GoogleMapReact>                
                </div>      
                
                <IconLabelDetail 
                    title={`${this.props.data.nameStreet}, ${this.props.data.addressNumber}`}
                    subtitle={this.props.data.typeAddress}
                    icon={{icon:"map-marker-alt"}}
                    />
            </div>
        )
    }
}
*/

