import React, { Component } from 'react'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import './OpportunityClient.css'


export default props => {
    let data = props.data || []
    let elementsBadgeDetail = (obj,idx) => {            
        return  <BadgeDetail 
                    key={idx}
                    title={obj.title}
                    subtitle={obj.subtitle}
                    value={obj.value}
                    color={obj.color}/>
    }
    
    return (
        <div className="container-board">
            <div className="opportunity-client-container">
                <div>
                    <span>Oportunidades</span>
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
