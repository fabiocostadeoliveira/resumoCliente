import React, { Component } from 'react'
import './Board.css'


export default class Board extends Component {
    
    render(){            
        let additionalClassName = ''
        additionalClassName = this.props.className || ''

        return (
            <div className={"container-board " + (additionalClassName) }>
                <div>
                    <h5><span>Informações Gerais</span></h5>
                </div>
                <div>
                    aaaaaaaaa a aaaaa a aaaaaaaaaaaaa aa aaaaaaaaaaaaaaaa aaaaaaa
                </div>
                <div>
                    bbbbbbbbbbbbbbbbbbbbbbbbb bbb b bbb b bbbbbbbbbbbbbbbbbbb
                </div>
            </div>  
        )
    }    

}
