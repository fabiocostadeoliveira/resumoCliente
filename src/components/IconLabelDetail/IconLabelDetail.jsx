import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconLabelDetail.css'

export default props => {        
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1' 
    
    if (props.subtitle){
        subTitle = <p className="icon-label-detail-subtitle">{props.subtitle}</p>
        detailClassName = 'container icon-label-detail'
    }

    let image = props.icon.icon || ''
    let typeColor = props.typeColor ? 'text-' + props.typeColor  : ''
    let paramsFontAwesome = {icon:image}
    let containerStyle = props.containerStyle || ''
    
    return(        
        <div className={`d-flex ml-1 align-items-center ${containerStyle}`}>
            <div>
                <FontAwesomeIcon className={typeColor} {...paramsFontAwesome} />
            </div>
            <div className={detailClassName}>
                <p className="icon-label-detail-title"><span>{props.title}</span></p>
                 {subTitle}                        
            </div>
        </div>
    )
}