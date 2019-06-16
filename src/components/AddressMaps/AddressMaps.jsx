import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'
import './AddressMaps.css'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class AddressMaps extends Component {

    static defaultProps = {
        center: {
          lat: -24.95,
          lng: -53.43
        },
        zoom: 12
      };

    render(){
        return(
            <div className="container-board">
                <div>
                    <h6><span>Local</span></h6>
                </div>                
                <div className="address-gloogle-maps" >
                    <GoogleMapReact                         
                        bootstrapURLKeys={{ key:'AIzaSyCK1GUu4HlpeUZQfeC5B3O_ALBEuuD76fo'}}
                        //bootstrapURLKeys={{ key:'AIzaSyAbRPyiXBXNZOKHWb__hVMG3LHntyB9ZVY'}}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}>
                        <AnyReactComponent
                        lat={-24.958119}
                        lng={-53.435951}
                        text="Lago"                        
                        />
                    </GoogleMapReact>                
                </div>      
                
                <IconLabelDetail 
                    title="aaaaaaa" 
                    subtitle="bbbbbbbbbbbbbbbb"
                    icon={{icon:"map-marker-alt"}}
                    />
            </div>
        )
    }
} 