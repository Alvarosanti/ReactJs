import React from 'react'
import ButtonFc from '../ButtonFc/ButtonFc'

// componente contenedor
export default class ButtonCl extends React.Component{
    render(){
        console.log('Props btnCl',this.props)
        return(
            <ButtonFc text={this.props.text} 
            color= {this.props.color}/>
        )
    };
}
