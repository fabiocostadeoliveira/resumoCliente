import React, { Component }from 'react'
import {chindrenWithProps} from '../../util/Util'
import './TimelineItem.css'



export default class TimelineItem extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let styleTimePoint = {'backgroundColor':this.props.colorIcon,
                              'borderColor':this.props.colorIcon,
                              'border':`3px solid ${this.props.colorIcon}`}
        return (
            <div>
            <div className="circle-item-timeline" style={{...styleTimePoint}}/>
                <li>
                    <h6 style={{paddingLeft:'5px'}}>{this.props.title}</h6>
                    {chindrenWithProps(this.props)}
                </li>
            </div>
        )
    }

}