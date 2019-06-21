import React, { Component } from 'react'
import './FinancialSecurities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'


export default props => {

    const mountBadgeDetail = (obj,idx) => {            
        return  <BadgeDetail key={idx}
                             title={obj.title}
                             subtitle={obj.subtitle}
                             value={obj.value}
                             color={obj.color}/>
    }

    let data = props.data || []
    let elBadgeDetail = data.map(mountBadgeDetail)
    return (
        <div className="container-board">               
            <div className="financial-securities-container">
                <div>
                    <h6>Titulos Financeiros</h6>
                </div>
                {elBadgeDetail}
            </div>
        </div>
    )
}