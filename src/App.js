import './App.css';

import {Route ,Switch} from 'react-router-dom'

import MainScreen from './screen/MainScreen';
import CoinScreen from './screen/CoinScreen';



function App() {
   
      
  return (
    
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainScreen} />
        <Route exact path="/:coin" component={CoinScreen} />
      </Switch>
    </div>
  );
}

export default App;
