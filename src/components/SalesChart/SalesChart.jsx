import React, { Component } from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart'
import './SalesChart.css'


export default class SalesChart extends Component {

    constructor(props){
        super(props)
        this.transformDataToDataChart = this.transformDataToDataChart.bind(this)
        this.orderData = this.orderData.bind(this)
        this.agruparValores = this.compileData.bind(this)
        //this.state = {...props}
    }

    transformDataToDataChart(data){        
        return {title:data.product , value:data.totalSale, color:''}
    }

    orderData(x,y){
        return y.value - x.value
    }

    compileData(listData){
        let newArray = []
        let oldValue = 0
        const limit = 2
        const colors = ['#2ECC71','#F4D03F','#C0392B']
        listData.forEach( (el,idx ) => {
            if (idx >= limit) {
                oldValue = newArray[limit] ? newArray[limit].value : 0
                newArray[limit] = {'title': 'Outros', value: el.value + oldValue}
            }else{
                newArray.push(el)
            }
        });
        newArray = newArray.map( (el,idx) => {
            el.color = colors[idx]
            return el
        })
        return newArray
    }

    render (){
        let list = this.props.data ? this.props.data.map(this.transformDataToDataChart) : []
        let listOrdered = list.sort(this.orderData)
        const listChart = this.compileData(listOrdered)
        const formatLabelChart = ({ data, dataIndex }) => {
            return data[dataIndex].title + 
                   ' - '                 + 
                   data[dataIndex].value.toLocaleString("pt-BR",{style:"currency", currency:"BRL"}) 
        }
            
        return(
            <div className="container-board">
                <h6><span>Mais vendidos</span></h6>
                <ReactMinimalPieChart
                style={{height:'90%'}}
                data={listChart}                
                animate
                animationDuration={1000}
                label={formatLabelChart}
                labelStyle={{
                    fontSize: '5px',
                    fontFamily: 'sans-serif',
                    fill: '#121212'
                }}
                />
            </div>     
        )
    }
}