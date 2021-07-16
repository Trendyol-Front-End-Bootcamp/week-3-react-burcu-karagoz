// import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from "../src/components/Header";
import { CharacterDetail } from "../src/pages/CharacterDetail";
import { HomePage } from "../src/pages/HomePage";
import { AppState } from "../src/context/appState";

import "./App.css";

const App = () => {
  return (
    <AppState>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/character/:id" component={CharacterDetail} />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </AppState>
  );
};

export default App;