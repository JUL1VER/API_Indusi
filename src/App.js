import {Component} from 'react';

import './App.css';
import GoREST from './components/GoREST';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='header'> <h1 className='headerText'>:D Список безработных индусов из API :D</h1></div>
        <GoREST/>
      </div>
    )
  }
}

export default App;