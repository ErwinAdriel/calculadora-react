import '../App.css';
import { Component } from 'react';
import Display from './Display';
import PaneldeBotones from './PaneldeBotones';
import operaciones from '../logica/operaciones';

class App extends Component {

  state = {
    total: null,
    siguiente:null,
    operador: null
  }

  handleClick = nombreDeBoton => this.setState(operaciones(this.state, nombreDeBoton))
  
  render(){
    return(
      <div className='App'>
        <div className='title'> 
          <h1>Calculadora - Basic</h1>
        </div>
        <div>
          <Display value={this.state.siguiente || this.state.total || "0"}></Display>
          <PaneldeBotones clickHandle={this.handleClick}></PaneldeBotones>
        </div>
      </div>
    )
  }
}

export default App;
