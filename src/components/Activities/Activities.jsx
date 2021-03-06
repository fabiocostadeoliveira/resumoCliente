import React, { Component } from 'react'
import './Activities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import Timeline from '../Timeline/TimelIne'
import TimelineItem from '../Timeline/TimelineItem'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'


const cfgStatusActivity = {
    late: {label: "Em atraso", markerLabel:"Atividades em atraso", typeColor: "danger", order:1}, 
    completed: {label: "Concluida", markerLabel:"Atividades concluidas", typeColor: "success", order:4  },
    progress: {label: "Em andamento", markerLabel:"Atividades em andamento",typeColor: "primary", order:2 },
    planned: { label: "Prevista", markerLabel:"Atividades previstas",typeColor: "warning", order:3},
}

const iconByTypeActivity = {
    meeting:'handshake',
    coffee:'coffee',
    scheduling:'calendar',
    email:'envelope',
    phonecall:'phone'
}

let objTotalizers = [
    {name:"total",    label:"Total",       value:0, color:"secondary"},
    {name:"late",     label:"Em atraso",   value:0, color:"danger"},
    {name:"progress", label:"Em andamento",value:0, color:"primary"},
    {name:"planned" , label:"Previstas",   value:0, color:"warning"},
    {name:"completed",label:"Concluidas",  value:0, color:"success"},
]


export default class Activities extends Component {
    constructor(props){
        super(props)
        this.state = {...props}
        this.groupByStatus       = this.groupByStatus.bind(this)
        this.handleChange        = this.handleChange.bind(this)
        this.makeTotalizers      = this.makeTotalizers.bind(this)
        this.fillTotalizers      = this.fillTotalizers.bind(this)
        this.makeMarker          = this.makeMarker.bind(this)
        this.putOrderIntoMarkers = this.putOrderIntoMarkers.bind(this)
        this.sortActivities      = this.sortActivities.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState(nextProps)
        }   
    }
    
    groupByStatus(data){
        let result = data.reduce(function (r, a) {
            r[a.status] = r[a.status] || [];
            r[a.status].push(a);
            return r;
        }, Object.create(null));
        return result
    }

    makeMarker(data,idxTimeline){
        let cfg = cfgStatusActivity[data[0]]
        let arrayActivities = data[1]
        return (
            <TimelineItem key={idxTimeline} 
                          title={cfg.markerLabel} 
                          typeColor={cfg.typeColor}
                 >
                {arrayActivities.map( (a, idxIconLabelDetail) => {
                    return <IconLabelDetail 
                                key={idxIconLabelDetail} 
                                title={a.title} 
                                subtitle={a.description}
                                containerStyle={'mb-1 mt-1 ml-3'} 
                                icon={{icon:iconByTypeActivity[a.typeActivity] }}/>
                           
                } )}
            </TimelineItem>
        )
    }    

    fillTotalizers(data,dataFromDB){
        data.value = 0
        if (data.name in dataFromDB ){
            data.value = dataFromDB[data.name].length
        }else if (data.name === 'total'){
            let arrayData = Object.values(dataFromDB)
            if (arrayData.length > 0){
                let total = 0
                arrayData.forEach( f => {
                    total += f.length
                })
                data.value = total
            }

        }
        return data
    }
    
    makeTotalizers(data,idx){
        return(
            <BadgeDetail key={idx} 
                         title={data.label}
                         value={data.value}
                         typeColor={data.color}/>
        )
    }

    putOrderIntoMarkers(data){
        let nameMarker = data[0]
        data['order'] = cfgStatusActivity[nameMarker].order
        return data
    }

    sortActivities(x,y){
        return x.order - y.order
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
        /** Totalizers **/
        let activitiesFromDB = this.state.data ? this.groupByStatus(this.state.data) : []
        objTotalizers.forEach( (item) => this.fillTotalizers(item,activitiesFromDB))
        let elmentsTotalizers = objTotalizers.map(this.makeTotalizers)

        /** Markes/Activities **/
        let arrayActivities = Object.entries(activitiesFromDB)
                                .map(this.putOrderIntoMarkers)
                                .sort(this.sortActivities)
        let elActivities = arrayActivities.map(this.makeMarker)
        let allItensOrdered = elActivities.filter( (i) => i != null)

        return (
            <div className="container-board activities">
                <div>
                    <span className="title-board">Atividades</span>
                </div>
                <input type="search"  
                       placeholder="Pesquisar..." 
                       style={{width:'inherit'}}
                       onChange={this.handleChange}/>
                
                <div className="d-flex flex-row flex-wrap">
                    {elmentsTotalizers}
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