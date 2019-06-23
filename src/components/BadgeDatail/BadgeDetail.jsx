import React from 'react'
import './BadgeDetail.css'


export default props => {    
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1'
    let style = props.style || ''
    let typeColor = props.typeColor ? 'badge-' + props.typeColor : ''

    if (props.subtitle){
        subTitle = <h6 className="sub-title"> <small>{props.subtitle}</small></h6>
        detailClassName = 'container badge-detail'
    }
    
    return(
        <div className="d-flex ml-1">       
            <h3><span className={`badge " ${typeColor} `}
                style={{style}}
                >{props.value}</span></h3>
            <div className={detailClassName}>
                <h6>{props.title}</h6>
                 {subTitle}       
            </div>
        </div>
    )
}