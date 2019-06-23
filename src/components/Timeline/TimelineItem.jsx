import React from 'react'
import {chindrenWithProps} from '../../util/Util'
import './TimelineItem.css'



export default props => {
    let typeColor = props.typeColor ? 'border-' + props.typeColor  : ''
    return (
        <div>
        <div className={`circle-item-timeline ${typeColor}`} />
            <li>
                <h6 style={{paddingLeft:'5px', marginTop:'13px'}}>{props.title}</h6>
                {chindrenWithProps(props)}
            </li>
        </div>
    )
}
