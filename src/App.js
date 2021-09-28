import logo from './logo.svg';
import './App.css';
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import kurser from "./Components/Kurser";
import kalender from "./Components/Kalender";
import karakter from "./Components/Karakter";

function App() {

  return (
      <Router>
        <div className="App">
            <NavigationBar />
            <Route exact path="/" component={kurser}/>
            <Route path="/kalender" component={kalender}/>
            <Route path="/karakter" component={karakter}/>
        </div>
      </Router>
  );
}

export default App;
