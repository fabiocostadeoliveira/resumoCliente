import React, { Component } from 'react'
import './Activities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import Timeline from '../Timeline/TimelIne'
import TimelineItem from '../Timeline/TimelineItem'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'

const groupByStatus = {
    atrasada:'Em atraso',
    concluida:'Concluidas',
    andamento:'Em andamento',
    prevista:'Previstas'
}

const iconByTypeActivity = {
    meeting:'handshake',
    coffee:'coffee',
    scheduling:'calendar',
    email:'envelope',
    phonecall:'phone'
}


export default class Activities extends Component {
    constructor(props){
        super(props)
        this.state = {...props}
        this.groupByStatus = this.groupByStatus.bind(this)
        this.countActivity = this.countActivity.bind(this)
        this.makeMarker = this.makeMarker.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    groupByStatus(data){
        let result = data.reduce(function (r, a) {
            r[a.status] = r[a.status] || [];
            r[a.status].push(a);
            return r;
        }, Object.create(null));
        return result
    }

    countActivity(dataList, group){
        if (group == 'total' ){
            let total = 0
            let activites = Object.keys(dataList)
            for( let activity of activites){
                total += dataList[activity].length
            }
            return total
        }
        return dataList[group] ? dataList[group].length : 0        
    }

    makeMarker(objActivities,activity,colorMarker){

        if ( !(activity in objActivities) ){
            return (null)
        }

        return (
            <TimelineItem title={activity} colorIcon={colorMarker} >
                {objActivities[activity].map( (a, idx) => {
                    return <IconLabelDetail key={idx} 
                                            title={a.title} 
                                            subtitle={a.description} 
                                            icon={{icon:iconByTypeActivity[a.typeActivity] }}/>
                } )}
            </TimelineItem>
        )
    }

    handleChange(e) {
        let typed = e.target.value.toLowerCase()
        let dataFilter = this.props.data.filter( (d) => {
            if(d.title.toLowerCase().includes(typed) || d.description.toLowerCase().includes(typed) )
               return true
            return false
        } )
        this.setState({ ...this.state, data: dataFilter })
    }

    render(){
        let objActivities = this.groupByStatus(this.state.data) || []
        let late = this.makeMarker(objActivities,"Em atraso","tomato")
        let completed = this.makeMarker(objActivities,"Concluida","green")
        let progress = this.makeMarker(objActivities,"Em andamento","blue")
        let planned = this.makeMarker(objActivities,"Prevista","#ffc107")
        let allItensOrdered = [late,planned,progress,completed].filter( (i) => i != null)
        
        return (
            <div className="container-board activities">
                <div>
                    <h6><span>Atividades</span></h6>
                </div>
                <input type="search"  
                       placeholder="Pesquisar..." 
                       style={{width:'inherit'}}
                       onChange={this.handleChange}/>
                
                <div className="activites-totalizer">
                    <BadgeDetail title="Total" value={this.countActivity(objActivities,"total")} color="secondary"/>
                    <BadgeDetail title="Em atraso" value={this.countActivity(objActivities,"Em atraso")} color="danger"/>
                    <BadgeDetail title="Em andamento" value={this.countActivity(objActivities,"Em andamento")} color="primary"/>
                    <BadgeDetail title="Previstas" value={this.countActivity(objActivities,"Prevista")} color="warning"/>
                    <BadgeDetail title="Concluidas" value={this.countActivity(objActivities,"Concluida")} color="success"/>                    
                </div>
                
                <div>
                    <Timeline>
                        {allItensOrdered}
                    </Timeline>                
                </div>
            </div>
        )
    }

}