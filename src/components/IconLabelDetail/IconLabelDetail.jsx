import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconLabelDetail.css'

export default props => {        
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1'    
    let colorIcon = props.coloricon ? props.coloricon : 'secondary'   
    const iconPhone = <FontAwesomeIcon className={"text-" + (colorIcon)} icon="envelope" size="1x"/>    

    if (props.subtitle){
        subTitle = <h6 className="sub-title"> <small>{props.subtitle}</small></h6>
        detailClassName = 'container'
    }
    
    return(
        <div className="d-flex ml-1 align-items-center">            
            {iconPhone}            
            <div className={detailClassName}>
                <h6>{props.title}</h6>
                 {subTitle}                        
            </div>
        </div>
    )
}