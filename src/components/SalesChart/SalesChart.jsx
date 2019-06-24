import React from 'react'
import ReactMinimalPieChart from 'react-minimal-pie-chart'
import './SalesChart.css'


export default props => {

    const transformDataToDataChart = (data) => {        
        return {title:data.product , value:data.totalSale, color:''}
    }

    const orderData = (x,y) => {
        return y.value - x.value
    }

    const compileData = (listData) =>{
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
    
    const formatLabelChart = ({ data, dataIndex }) => {
        return data[dataIndex].title                    + 
                ' '                                     + 
                data[dataIndex].percentage.toFixed(2)   + 
                '%'
    }
    
    let list = props.data ? props.data.map(transformDataToDataChart) : []
    let listOrdered = list.sort(orderData)
    const listChart = compileData(listOrdered)
        
    return(
        <div className="container-board">
            <span className="title-board">Mais vendidos</span>
            <ReactMinimalPieChart
            labelPosition={80}
            style={{height:'90%'}}
            data={listChart}                
            animate
            animationDuration={1000}
            label={formatLabelChart}
            labelStyle={{
                fontSize: '7px',
                fontFamily: 'sans-serif',
                fill: '#121212'
            }}
            />
        </div>     
    )
}