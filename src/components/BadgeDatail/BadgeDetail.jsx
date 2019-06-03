import React from 'react'
import './BadgeDetail.css'


export default props => {    
    let badgeColor = ''
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1'

    badgeColor = props.color ? 'badge-' + props.color : ''

    if (props.subtitle){
        subTitle = <h6 className="sub-title"> <small>{props.subtitle}</small></h6>
        detailClassName = 'container'
    }
    
    return(
        <div className="d-flex ml-1">       
            <h3><span className={"badge " + (badgeColor) }>{props.value}</span></h3>
            <div className={detailClassName}>
                <h6>{props.title}</h6>
                 {subTitle}       
            </div>
        </div>
    )
}