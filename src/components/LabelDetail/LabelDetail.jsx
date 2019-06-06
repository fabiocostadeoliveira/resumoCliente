import React from 'react'
import './LabelDetail.css'

export default props => {    
    let textColor = ''
    textColor = props.color ? 'text-' + props.color : ''
    return(
        <div>       
            <div className="row mb-n1 pb-0 ml-1">
                <h6><span className={textColor}>{props.value}</span></h6>            
            </div>
            <div className="row mt-n2 ml-1">
                <h6><small><span>{props.subtitle}</span></small></h6>                        
            </div>
        </div>
    )
}