import React, { Component } from 'react'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import './OpportunityClient.css'

const colorStatus ={
    opened:'primary',
    lost:'danger',
    won:'success',
    discarded:'secondary',
    other:'secondary'
}

export default props => {
    let getValueOpportunites = (data) => parseInt(data.value) || 0
    let sumOpportunities = ( (a,b) => a + b)
    let data = props.data || []
    let totalOpportunities = data.length > 0 ? data.map(getValueOpportunites).reduce(sumOpportunities) : 0
    let elementsBadgeDetail = (obj,idx) => {
        let status = obj.status || 'other'
        let typeColor = colorStatus[status]
        return  <BadgeDetail 
                    key={idx}
                    title={obj.title}
                    subtitle={obj.subtitle}
                    value={obj.value}
                    typeColor={typeColor}/>
    }
    
    return (
        <div className="container-board">
            <div className="opportunity-client-container">
                <div>
                    <span className="title-board">Oportunidades ({totalOpportunities})</span>
                </div>
                <div className="opportunity-client-itens">
                    {data.map(elementsBadgeDetail)}
                </div>
                <div className="link">                                                
                    <h6><small><a>VER TODAS OPORTUNIDADES</a></small></h6>                        
                </div>              
            </div>
        </div>
    )
}
