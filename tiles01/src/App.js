import './App.css';
import React from 'react';
import {
  //MemoryRouter as Router,
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import MainPage from './Pages/MainPage';
import ChosenCardsPage from './Pages/ChosenCardsPage';
import CategoryPage from './Pages/CategoryPage';
import AnimationPage from './Pages/AnimationPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/cards' component={ChosenCardsPage} />
          <Route exact path='/categories' component={CategoryPage} />
          <Route exact path='/animation' component={AnimationPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div >
  );
}

export default App;
