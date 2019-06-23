import React from 'react'
import { chindrenWithProps } from '../../util/Util'
import './Timeline.css'

export default props =>{
    return (
        <div>
            <ul className="timeline">
                {chindrenWithProps(props)}
            </ul>            
        </div>
    )
}