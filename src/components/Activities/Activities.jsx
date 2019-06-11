import React, { Component } from 'react'
import './Activities.css'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
//import LabelDetail from '../LabelDetail/LabelDetail';



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
            </div>
        )
    }

}