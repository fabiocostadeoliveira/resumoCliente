import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import If from '../../util/If'
import './IconLabelDetail.css'

export default props => {        
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1' 
    
    if (props.subtitle){
        subTitle = <p className="icon-label-detail-subtitle">{props.subtitle}</p>
        detailClassName = 'container icon-label-detail'
    }

    let image = props.icon ? props.icon.icon : false
    let typeColor = props.typeColor ? 'text-' + props.typeColor  : ''
    let paramsFontAwesome = {icon:image}
    let containerStyle = props.containerStyle || ''
    
    return(        
        <div className={`d-flex ml-1 align-items-center ${containerStyle}`}>
            <If test={image !== false}>
                <div>
                    <FontAwesomeIcon className={typeColor} {...paramsFontAwesome} />
                </div>
            </If>
            <div className={detailClassName}>
                <p className="icon-label-detail-title"><span>{props.title}</span></p>
                 {subTitle}                        
            </div>
        </div>
    )
}