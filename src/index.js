import React from 'react';
import ReactDOM from 'react-dom';
import './components/GenericUI/IconsFa'
import './index.css';
import './includes/bootstrap'
//import BadgeDetail from './components/BadgeDatail/BadgeDetail'
//import LabelDetail from './components/LabelDetail/LabelDetail'
//import IconLabelDetail from './components/IconLabelDetail/IconLabelDetail'
import Board from './components/Board/Board'
import ProfileBoard from './components/ProfileBoard/ProfileBoard'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    
        <div>
                {/**
                    <BadgeDetail value="4" title="Ganhas" subtitle="aquikkkk" color="success">
                    </BadgeDetail>     
        
                    <BadgeDetail value="1" title="fabio fabio fabio fabio fabio" subtitle="R$ 20.000,00" color="primary">
                    </BadgeDetail>       
        
                    <BadgeDetail value="1" title="Informações" color="primary">
                    </BadgeDetail>       
        
                    <BadgeDetail value="10" title="Perdidas" subtitle="R$ 20.000,00" color="danger">
                    </BadgeDetail>       
                    <LabelDetail value="R$ 12.00000,00 sdfsadfasdfas" color="primary" subtitle="Conaaaaaaaaaaaaaa a a cedido"/>
        
                    <LabelDetail value="R$ 12.000,00" color="success" subtitle="Disponivel"/>
                
                    <IconLabelDetail title="sasfas" subtitle="asdfasdfasdfadf  dfasd" icon={{icon:'phone', size:'1x',color:'olive',rotation:90}}/>
                */}
                
                <div className="container">
                        <div className="row">
                                <ProfileBoard></ProfileBoard>
                                <Board className="col"></Board>
                                <Board className="col"></Board>                        
                        </div>
                        <div className="row">
                                <Board className="col"></Board>
                                <Board className="col"></Board>
                                <Board className="col"></Board>                        
                        </div>

                        <div className="row">
                                <Board className="col"></Board>
                                <Board className="col"></Board>
                                <Board className="col"></Board>                        
                        </div>
                </div>
        </div>

    
,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
