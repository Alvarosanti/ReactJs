import React, {Component} from 'react'

export default class Name extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: this.props.nombre
        }
    }

    // metodo manejar estados setstate handleName()
    handleName = () =>{
        this.setState({
            name: 'Bob Sponge'
        })
    }

    // retorna jsx
    render(){
        return(
            <React.Fragment>
            <button onClick={this.handleName}>Cambiar nombre</button>
            <h2>{ this.state.name }</h2>
            </React.Fragment>
        )
    }

}