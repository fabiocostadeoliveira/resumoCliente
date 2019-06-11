import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'
import './ProfileBoard.css'

const dataUninformed = 'Não Informado'

const dataDefault = {
    nameClient : dataUninformed,
    nameCompany: dataUninformed,
    status: dataUninformed,
    phone: dataUninformed,
    typePhone: dataUninformed,
    email: dataUninformed,
    typeEmail: dataUninformed
}     

export default class ProfileBoard extends Component {
    state = {...dataDefault}


    render(){
        return (
            <div className="container-board">
                <h6><span>Informações Gerais</span></h6>
                <div>
                    <div className="user-info">                        
                        <div className="icon">
                            <FontAwesomeIcon icon="user-circle" size="4x" color="gray"/>                                                                    
                        </div>
                        <div className="user-data-company">
                            <span>{this.props.nameClient}</span>
                            <span>{this.state.nameCompany}</span>
                            <span>{this.state.status}</span>                        
                        </div>
                    </div>
                    <IconLabelDetail title={this.state.phone} subtitle={this.state.typePhone} icon={{icon:"phone", rotation:90  }}/>
                    <IconLabelDetail title={this.state.email} subtitle={this.state.typeEmail} icon={{icon:"envelope"}}/>                    
                </div>                
            </div>
        )
    }
}