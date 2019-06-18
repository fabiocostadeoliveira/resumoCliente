import React, { Component } from 'react'
import './FinancialSecurities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'


export default class FinancialSecurities extends Component {

    constructor(props){
        super(props)
        this.mountBadgeDetail = this.mountBadgeDetail.bind(this)
    }

    mountBadgeDetail(obj,idx){            
        return  <BadgeDetail key={idx} title={obj.title} subtitle={obj.subtitle} value={obj.value} color={obj.color}/>
    }

    render(){
        let elBadgeDetail = this.props.data || []
        elBadgeDetail = elBadgeDetail.map(this.mountBadgeDetail)
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
}