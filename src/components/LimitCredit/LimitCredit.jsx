import React, { Component } from 'react'
import LabelDetail from '../LabelDetail/LabelDetail'
import './LimitCredit.css'

const limitDefault = {
    value:' R$ 0,00 ',
    description:'  Sem Informação  ',
    color:'secondary'
}
export default class LimitCredit extends Component {

    constructor(props){
        super(props)        
    }
    
    render(){
        const limitGranted = this.props.limitGranted || limitDefault
        const limitAvailable = this.props.limitAvailable || limitDefault
        
        return (
            <div className="container-board">
                <div>
                    <div>
                        <span>Limite de crédito</span>
                    </div>
                    <div>
                        <LabelDetail title={limitGranted.value}
                                     subtitle={limitGranted.description}
                                     color={limitGranted.color}/>
                        
                        <LabelDetail title={limitAvailable.value}
                                     subtitle={limitAvailable.description}
                                     color={limitAvailable.color}/>
                    </div>                    
                </div>
            </div>
        )
    }
}