import React from 'react'
import './LabelDetail.css'

export default props => {    
    let textColor = props.typeColor ? 'text-' + props.typeColor : ''
    return(
        <div>       
            <div className="row mb-n1 pb-0 ml-1">
                <h6><span className={textColor}>{props.title}</span></h6>            
            </div>
            <div className="row mt-n2 ml-1">
                <h6><small><span>{props.subtitle}</span></small></h6>                        
            </div>
        </div>
    )
}