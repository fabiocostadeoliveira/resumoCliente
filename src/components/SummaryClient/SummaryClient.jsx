import React, { Component } from 'react'
import Board from '../Board/Board'
import ProfileBoard from '../ProfileBoard/ProfileBoard'
import AddressMaps from '../AddressMaps/AddressMaps'
import OpportunityClient from '../OpportunityClient/OpportunityClient'
import LimitCredit from '../LimitCredit/LimitCredit'
import FinancialSecurities from '../FinancialSecurities/FinancialSecurities'
import SalesChart from '../SalesChart/SalesChart'
import Activities from '../Activities/Activities'
import SummaryClientService, { summaryQuery, activitiesQuery } from '../../services/SummaryClientService'

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
    constructor(props){
        super(props)
        this.state = {
            opportunities:[]
         }
    }
    
    componentDidMount(){
        summaryQuery(1).then(data => this.setState(data)) 
        activitiesQuery(1).then(data => this.setState(data)) 
    }

    render(){

        /*
        const listActivities = [
            {title: 'Reuniao', description:'Reuniao com gestores',status:'Em atraso', typeActivity:'meeting'},
            {title: 'Contato Clientes', description:'Clientes do projeto',status:'Em andamento', typeActivity:'phonecall'},
            {title: 'Café com coordenadores', description:'Coordenação do projeto Xy',status:'Concluida', typeActivity:'coffee'},
            {title: 'Ligação cliente', description:'falar com João',status:'Concluida', typeActivity:'phonecall'},
            {title: 'Reserva de sala', description:'sala com projetor',status:'Concluida', typeActivity:'scheduling'},
            {title: 'Email orçamento', description:'Maria da Silva',status:'Concluida', typeActivity:'email'},
            {title: 'Ligação', description:'José Carlos',status:'Concluida', typeActivity:'phonecall'},
            {title: 'Desafio Frontend', description:'Entregar projeto',status:'Em andamento', typeActivity:'scheduling'},
            {title: 'Ligação Juridico', description:'Revisar contrato de compra',status:'Prevista', typeActivity:'scheduling'}
        ]
        */

        let listOpportunity = this.state.opportunities || []
        let listTotalSales = this.state.totalSales || []
        let listFinancialSecurities = this.state.financialSecurities || []
        let limitCredit = this.state.limitCredit || {}
        let listActivities = this.state.activities || []

        return (
            
            <div className="d-flex flex-row">
                
                <div className="col-6 pr-2">
                    <div className="d-flex flex-wrap">
                        <ProfileBoard {...dataDefault}></ProfileBoard>

                        <AddressMaps/>                                
                        <OpportunityClient data={listOpportunity} opportunities={this.state.opportunities}></OpportunityClient>                                    
                        <LimitCredit {...limitCredit}/>                                
                        <FinancialSecurities data={listFinancialSecurities} />
                        <SalesChart data={listTotalSales}/>
                    </div>
                </div>

                <div className="col-6 pl-2">
                    <Activities data={listActivities}/>
                </div>
            </div>
        )
    }
}