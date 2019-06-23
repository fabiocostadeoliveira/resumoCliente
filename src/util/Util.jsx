import React from 'react'

export function chindrenWithProps(props){   
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props, ...child.props
        })
    })    
}

export function currencyFormat(value,stringToFloat=false){
    let valueAux = value
    let ret = ''

    try {
        if ((stringToFloat) && (typeof(valueAux) != Number)) {
            valueAux = parseFloat(valueAux)
        }    
        if (isNaN(valueAux)) throw "Impossivel converter valor " + value
        ret = valueAux.toLocaleString("pt-BR",{style:"currency", currency:"BRL"})
    } catch (error) {
        console.log('Nao foi possivel converter',value,'para Float')        
        console.log(error)
        ret = 'Convertion error'
    }
    return ret
}