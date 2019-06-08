import React, { Component } from 'react'
import Board from '../Board/Board'
import ProfileBoard from '../ProfileBoard/ProfileBoard'
import AddressMaps from '../AddressMaps/AddressMaps'
import OpportunityClient from '../OpportunityClient/OpportunityClient'
import LimitCredit from '../LimitCredit/LimitCredit'




const dataDefault = {
    nameClient : 'dataUninformed',
    nameCompany: 'dataUninformed',
    status: 'dataUninformed',
    phone: 'dataUninformed',
    typePhone: 'dataUninformed',
    email: 'dataUninformed',
    typeEmail: 'dataUninformed'
}  

export default class SummaryClient extends Component {

    render(){
        const listOpportunity = [
            {title:'Ganhas', subtitle:'20.000,00', value:'4', color:'success'},
            {title:'Perdidas', subtitle:'4.000,00', value:'1', color:'danger'},
            {title:'Abertas', subtitle:'Diversos', value:'4', color:'primary'},
            {title:'Descartadas', subtitle:'-', value:'0', color:'secondary'}            
        ]

        const listLimitCredit = {
            limitGranted:{value:'2221212', description:'Limite Concedito',color:'primary'},
            limitAvailable:{value:'2221212',description:'Limite Concedito',color:'success'}
        }
        let abc = {a:'teste',b:'teste b'}

        return (
            <div className="container">
                        <div className="row">
                                <ProfileBoard {...dataDefault}></ProfileBoard>
                                <AddressMaps/>                                
                                <OpportunityClient data={listOpportunity}></OpportunityClient>                                    
                        </div>
                        <div className="row">
                                <LimitCredit {...listLimitCredit}/>
                                <LimitCredit {...listLimitCredit}/>
                                <Board className="col"></Board>
                                <Board className="col"></Board>                        
                        </div>

                        <div className="row">
                                <Board className="col"></Board>
                                <Board className="col"></Board>
                                <Board className="col"></Board>                        
                        </div>
                </div>            
        )
    }
}