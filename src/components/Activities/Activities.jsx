import React, { Component } from 'react'
import './Activities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import Timeline from '../Timeline/TimelIne'
import TimelineItem from '../Timeline/TimelineItem'
import IconLabelDetail from '../IconLabelDetail/IconLabelDetail'


export default class Activities extends Component {
    constructor(props){
        super(props)
        this.state = {...props}
    }

    render(){

        return (
            <div className="container-board activities">
                <div>
                    <h6><span>Atividades</span></h6>
                </div>
                <input type="search"  placeholder="Pesquisar..." style={{width:'inherit'}}/>
                <div className="activites-totalizer">
                    <BadgeDetail title="Total" value="0" color="secondary"/>
                    <BadgeDetail title="Em atraso" value="0" color="danger"/>
                    <BadgeDetail title="Em andamento" value="0" color="primary"/>
                    <BadgeDetail title="Previstas" value="0" color="warning"/>
                    <BadgeDetail title="Concluidas" value="0" color="success"/>                    
                </div>
                <div>
                    <Timeline>
                        
                        <TimelineItem title="Novos" colorIcon="blue" >
                            <IconLabelDetail title="a11111" subtitle="aaaaaa" icon={{icon:"coffee"}}/>
                            <IconLabelDetail title="a22222" subtitle="aaaaaa" icon={{icon:"user", color:"red"}}/>
                            <IconLabelDetail title="a33333" subtitle="aaaaaa" icon={{icon:"people-carry"}}/>
                            <IconLabelDetail title="a44444" subtitle="aaaaaa" icon={{icon:"envelope"}}/>
                        </TimelineItem>
                        
                        <TimelineItem title="Previsto" colorIcon="gold" >
                            <IconLabelDetail title="bbbbbbbbb" subtitle="bbbbbbbb" icon={{icon:"hands"}}/>
                            <IconLabelDetail title="bbbbbbbbb" subtitle="bbbbbbbb" icon={{icon:"handshake"}}/>                        
                        </TimelineItem>
                        
                        <TimelineItem title="Atrasados" colorIcon="tomato" >
                            <IconLabelDetail title="cccccccccccc" subtitle="ccccccc" icon={{icon:"handshake"}}/>
                        </TimelineItem>

                        <TimelineItem title="Concluidos" colorIcon="FORESTGREEN" >
                            <IconLabelDetail title="eeeeeeeeee" subtitle="eeeeeeeeeeee" icon={{icon:"handshake"}}/>
                            <IconLabelDetail title="eeeeeeeeee" subtitle="eeeeeeeeeeee" icon={{icon:"handshake"}}/>
                            <IconLabelDetail title="eeeeeeeeee" subtitle="eeeeeeeeeeee" icon={{icon:"handshake"}}/>
                            <IconLabelDetail title="eeeeeeeeee" subtitle="eeeeeeeeeeee" icon={{icon:"handshake"}}/>
                        </TimelineItem>

                    </Timeline>                
                </div>
            </div>
        )
    }

}