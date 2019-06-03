import React from 'react'
import './BadgeDetail.css'


export default props => {    
    let badgeColor = ''
    let subTitle = ''
    let detailClassName = 'd-flex mt-2 ml-1'

    badgeColor = props.color ? 'badge-' + props.color : ''

    if (props.subtitle){
        subTitle = <h6 className="sub-title"> <small>{props.subtitle}</small></h6>
        detailClassName = 'container'
    }
    
    return(
        <div className="d-flex ml-1">       
            <h3><span className={"badge " + (badgeColor) }>{props.value}</span></h3>
            <div className={detailClassName}>
                <h6>{props.title}</h6>
                 {subTitle}       
            </div>
        </div>
    )
}

    
    


    


    /* <div className="row ">        
            <div className="col pr-1">
                <h3><span className="badge badge-primary">{props.value}</span></h3>
            </div>
            
            <div className="col">
            
                <div className="row">
                    <div >
                        <h5><span>Ganhas</span></h5>
                    </div>
                    <div className="row" >
                        <small>R$ 20.000,00</small>
                    </div>
                </div>   
            
            </div>
        
    </div> */