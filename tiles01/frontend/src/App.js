//CSS import
import './CSS/App.css';
import React, {useState} from 'react';
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

  const [chosenCards, setChosenCards] = useState({
    trigger: null, 
    things: null, 
    feedback: null
  })
  const updateCard = (category, newCard) => {
    if (category === "trigger"){
        setChosenCards({...chosenCards, trigger: newCard})
    }else if (category === "things"){
      setChosenCards({...chosenCards, things: newCard})
    }else if (category === "feedback"){
      setChosenCards({...chosenCards, feedback: newCard})
    }
  }

  const context = {
    ...chosenCards,
    updateCard
  }

  
  return (
    <CardsContext.Provider value={context}>
    <div className="App">
      <Router >
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
    </CardsContext.Provider>
  );
}

export default App;

export const CardsContext = React.createContext(
  {
    trigger: null,
    things: null,
    feedback: null,
    updateCard: (category, newCard)=>{}
  }
)
