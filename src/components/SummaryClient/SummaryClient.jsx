import React, { Component } from 'react'
import Board from '../Board/Board'
import ProfileBoard from '../ProfileBoard/ProfileBoard'
import AddressMaps from '../AddressMaps/AddressMaps'
import OpportunityClient from '../OpportunityClient/OpportunityClient'
import LimitCredit from '../LimitCredit/LimitCredit'
import FinancialSecurities from '../FinancialSecurities/FinancialSecurities'
import SalesChart from '../SalesChart/SalesChart'
import Activities from '../Activities/Activities'





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
            {title:'Descartadas', subtitle:'-', value:'0', color:'secondary'},            
            {title:'Ganhas', subtitle:'20.000,00', value:'4', color:'success'},
            {title:'Perdidas', subtitle:'4.000,00', value:'1', color:'danger'},
            {title:'Abertas', subtitle:'Diversos', value:'4', color:'primary'}
            
        ]

        const listLimitCredit = {
            limitGranted:{value:'2221212', description:'Limite Concedito',color:'primary'},
            limitAvailable:{value:'2221212',description:'Limite Disponivel',color:'success'}
        }

        const listFinancialSecurities = [
            {title:'R$3.105,00', subtitle:'Vencidos', value:1, color:'danger'},
            {title:'R$2.000,00', subtitle:'A Vencer', value:2, color:'warning'},
            {title:'R$30.000,00', subtitle:'Pagos', value:3, color:'success'}
        ]

        const listTotalSales = [
            {product: 'Soja',totalSale:   10000.00},
            {product: 'Milho',totalSale:  50000.00},
            {product: 'Trigo', totalSale: 10000.00},
            {product: 'Café', totalSale:  10000.00},
            {product: 'Aveia', totalSale: 10000.00},
        ]  

        return (
            

            <div className="d-flex flex-row">
                
                <div className="col-6 pr-2">
                    <div className="d-flex flex-wrap">
                        <ProfileBoard {...dataDefault}></ProfileBoard>
                        <AddressMaps/>                                
                        <OpportunityClient data={listOpportunity}></OpportunityClient>                                    
                        <LimitCredit {...listLimitCredit}/>                                
                        <FinancialSecurities data={listFinancialSecurities} />
                        <SalesChart data={listTotalSales}/>
                    </div>
                </div>

                <div className="col-6 pl-2">
                    <Activities/>
                </div>
            </div>
        )
    }
}