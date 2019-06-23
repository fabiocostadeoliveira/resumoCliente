import React, { Component } from 'react'
import './SummaryClient.css'
import ProfileBoard from '../ProfileBoard/ProfileBoard'
import AddressMaps from '../AddressMaps/AddressMaps'
import OpportunityClient from '../OpportunityClient/OpportunityClient'
import LimitCredit from '../LimitCredit/LimitCredit'
import FinancialSecurities from '../FinancialSecurities/FinancialSecurities'
import SalesChart from '../SalesChart/SalesChart'
import Activities from '../Activities/Activities'
import { summaryQuery, activitiesQuery } from '../../services/SummaryClientService'

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

        let listOpportunity = this.state.opportunities || []
        let listTotalSales = this.state.totalSales || []
        let listFinancialSecurities = this.state.financialSecurities || []
        let limitCredit = this.state.limitCredit || {}
        let listActivities = this.state.activities || []
        let profile = this.state.profile || {}
        let address = profile.address || {}
        let latitude = address.lat ? address.lat.toFixed(2) : 0
        let longitude = address.lng ? address.lng.toFixed(2) : 0
        let objCenter = {lat:latitude, lng :longitude}
        
        return (
            
            <div className="containter-summaryClient">
                
                <div className="grid-boards pr-2">
                        <ProfileBoard {...profile}></ProfileBoard>
                        <AddressMaps data={address} center={objCenter}/>                                
                        <OpportunityClient data={listOpportunity}></OpportunityClient>                                    
                        <LimitCredit {...limitCredit}/>                                
                        <FinancialSecurities data={listFinancialSecurities} />
                        <SalesChart data={listTotalSales}/>
                </div>

                <div className="pl-2">
                    <Activities data={listActivities}/>
                </div>
            </div>
        )
    }
}