import React, {Component} from 'react';
class SeccionPruebas extends Component{
  contador = 0 ;
  state = {
    contador : 0
  };
 
  sumar(){
    this.setState({
      contador: (this.state.contador + 1)
    });   
  }
  restar(){
    this.setState({
      contador: (this.state.contador - 1)
    });   
  }


  render(){
    return (
      <React.Fragment>
        <h4>Soy el componente "SeccionPruebas"</h4>
        <p>Contador <br/>
        {this.state.contador}
        </p>
        <div>
        <input type="button" value="Sumar" onClick={this.sumar.bind(this)}/>
        <input type="button" value="Restar"onClick={this.restar.bind(this)}/>
          
        </div>
      </React.Fragment>
      
    );

  }
}

export default SeccionPruebas;