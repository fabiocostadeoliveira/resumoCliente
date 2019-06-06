import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconLabelDetail.css'

export default props => {        
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1'       
    const iconPhone = <FontAwesomeIcon {...props.icon} />    
    
    if (props.subtitle){
        subTitle = <h6 className="sub-title"> <small>{props.subtitle}</small></h6>
        detailClassName = 'container icon-label-detail'
    }
    
    return(
        <div className="d-flex ml-1 align-items-center">            
            <div>
                {iconPhone}            
            </div>
            <div className={detailClassName}>
                <h6>{props.title}</h6>
                 {subTitle}                        
            </div>
        </div>
    )
}