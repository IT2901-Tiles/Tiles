import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ChosenCardsPage from './Pages/ChosenCardsPage';
import CategoryPage from './Pages/CategoryPage';
import AnimationPage from './Pages/AnimationPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/cards' component={ChosenCardsPage} />
          <Route exact path='/categories' component={CategoryPage} />
          <Route exact path='/animation' component={AnimationPage} />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
