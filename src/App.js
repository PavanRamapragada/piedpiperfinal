import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/inc/navbar';
import Home from './components/pages/Home';
import About from './components/pages/About'
import Footer from './components/inc/footer';
import Player1 from './components/inc/player1';
import Player2 from './components/inc/player2';
import Player3 from './components/inc/player3';
import Rajalist from './components/pages/inc/rajalist';
import Arrlist from './components/pages/inc/arrlist';
//import Fulllist from './components/pages/inc/fulllist';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route path="/play1">
            <Player1 />
          </Route>
          <Route path="/list1">
            <Rajalist />
          </Route>
          <Route path="/play2">
            <Player2 />
          </Route>
          <Route path="/list2">
            <Arrlist />
          </Route>
          <Route path="/play3">
            <Player3 />
          </Route>
          
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
