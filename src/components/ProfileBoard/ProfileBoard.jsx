import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'
import './ProfileBoard.css'

export default props => {

    return (
        <div className="container-board">
            <span className="title-board">Informações Gerais</span>
            <div>
                <div className="user-info">                        
                    <div className="icon">
                        <FontAwesomeIcon icon="user-circle" size="4x" color="gray"/>                                                                    
                    </div>
                    <div className="user-data-company">
                        <span>{props.nameClient}</span>
                        <span>{props.nameCompany}</span>
                        <span>{props.status}</span>                        
                    </div>
                </div>
                <IconLabelDetail title={props.phone} subtitle={props.typePhone} icon={{icon:"phone", rotation:90  }}/>
                <IconLabelDetail title={props.email} subtitle={props.typeEmail} icon={{icon:"envelope"}}/>                    
            </div>                
        </div>
    )
}