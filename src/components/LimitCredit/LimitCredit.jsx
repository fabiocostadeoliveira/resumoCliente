import React, { Component } from 'react'
import LabelDetail from '../LabelDetail/LabelDetail'
import Util, { currencyFormat } from '../../util/Util'
import './LimitCredit.css'

const limitDefault = {
    value:'0',
    description:'  Sem Informação  ',
    color:'secondary'
}
export default props => {
    const limitGranted = props.limitGranted || limitDefault
    const limitAvailable = props.limitAvailable || limitDefault
    return (
        <div className="container-board">
            <div>
                <div>
                    <span className="title-board">Limite de crédito</span>
                </div>
                <div>
                    <div className="pt-4">
                        <LabelDetail title={currencyFormat(parseFloat(limitGranted.value)) }
                                        subtitle={limitGranted.description}
                                        typeColor={"primary"}/>
                    </div>
                    <div className="pt-4">
                        <LabelDetail title={currencyFormat(parseFloat(limitAvailable.value))}
                                        subtitle={limitAvailable.description}
                                        typeColor={"success"}/>
                    </div>
                </div>                    
            </div>
        </div>
    )
}