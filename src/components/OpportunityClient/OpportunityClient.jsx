import React, { Component } from 'react'
import BadgeDetail from '../BadgeDatail/BadgeDetail'
import './OpportunityClient.css'


export default class OpportunityClient extends Component {

    constructor(props){
        super(props)
        this.funcBadgeDetail = this.funcBadgeDetail.bind(this)
        this.state = {...props}
    }

    componentWillReceiveProps(nextProps){
        if(nextProps!==this.props){
            this.setState(nextProps)
        }   
    }

    funcBadgeDetail(obj,idx){            
        return  <BadgeDetail key={idx} title={obj.title} subtitle={obj.subtitle} value={obj.value} color={obj.color}/>
    }
    
    render(){        

        const elBadgeDetail = this.state.data.map(this.funcBadgeDetail)

        return (
            <div className="container-board">
                <div className="opportunity-client-container">
                    <div>
                        <span>Oportunidades</span>
                    </div>
                    <div className="opportunity-client-itens">
                        {elBadgeDetail}
                    </div>
                    <div className="link">                                                
                        <h6><small><a>VER TODAS OPORTUNIDADES</a></small></h6>                        
                    </div>              
                </div>
            </div>
        )
    }
}