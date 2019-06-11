import React, { Component } from 'react'
import TimelineItem from '../../components/Timeline/TimelineItem'
import { chindrenWithProps } from '../../util/Util'
import './Timeline.css'



export default class Timeline extends Component {
    constructor(props){
        super(props)
        this.mountTimelineItens = this.mountTimelineItens.bind(this)
        this.sortActivities = this.mountTimelineItens.bind(this)
        this.state = {...props}
    }

    mountTimelineItens(data,idx){
        return <li>{chindrenWithProps(this.props)}</li>
    }

    sortActivities(){

    }

    render(){
        
        return (
            <div>
                <ul class="timeline">
                    {chindrenWithProps(this.props).map( p =><li><TimelineItem></TimelineItem></li>)}
                </ul>            
            </div>
        )
    }
}