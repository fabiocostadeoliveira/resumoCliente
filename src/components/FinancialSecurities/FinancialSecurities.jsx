import React from 'react'
import './FinancialSecurities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import { currencyFormat } from '../../util/Util'


const cfgStatus ={
    toexpire:{ color: 'warning', label: 'A vencer'},
    expired:{ color: 'danger', label: 'Vencidos'},
    paid:{ color: 'success', label: 'Pagos'},
    other:{ color: 'secondary', label: 'Outros'}
}

export default props => {
    
    const mountBadgeDetail = (obj,idx) => {            
        let status = obj.status || 'other'
        let typeColor = cfgStatus[status].color
        let subTitle = cfgStatus[status].label
        let total = currencyFormat(obj.total,true) || '--'
        return  <BadgeDetail key={idx}
                             title={total}
                             subtitle={subTitle}
                             value={obj.quantity}
                             typeColor={typeColor}/>
    }

    let data = props.data || []
    let elBadgeDetail = data.map(mountBadgeDetail)
    return (
        <div className="container-board">               
            <div className="financial-securities-container">
                <div>
                    <span className="title-board">Titulos Financeiros</span>
                </div>
                {elBadgeDetail}
            </div>
        </div>
    )
}