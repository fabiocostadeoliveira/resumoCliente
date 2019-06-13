import React, { Component } from 'react'
import TimelineItem from '../../components/Timeline/TimelineItem'
import { chindrenWithProps } from '../../util/Util'
import './Timeline.css'



export default class Timeline extends Component {
    constructor(props){
        super(props)
        this.state = {...props}
    }

    render(){
        return (
            <div>
                <ul className="timeline">
                    {chindrenWithProps(this.props)}
                </ul>            
            </div>
        )
    }
}