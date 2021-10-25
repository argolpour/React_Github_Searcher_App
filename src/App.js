

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Singleuser from './components/Singleuser';
import Notfound from './pages/Notfound';
import GithubState from './context/github/GithubState';



function App() {
 

// const clearAll=()=>{
//   setUsers([]);
// }
  return (
    <div className="App">
      <Router>
        <GithubState>
     <Header/>
     <Switch>
     <Route path="/" exact>
       
      <Home  />
      </Route>
      <Route path="/about" exact>
        <About/>
      </Route>
      <Route path="/user/:login" exact>
        <Singleuser/>
      </Route>
      <Route>
      <Notfound/>
      </Route>
      </Switch>
      </GithubState>
     </Router>
    </div>
  );
}

export default App;
