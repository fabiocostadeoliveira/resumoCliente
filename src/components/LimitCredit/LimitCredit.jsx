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
        this.state = {...props}
    }    
    
    render(){
        console.log('props a',this.state)
        const limitGranted = this.state.limitGranted || limitDefault
        const limitAvailable = this.state.limitAvailable || limitDefault
        
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