import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Post from "./components/Post";

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Header />
          <main>
            <Route exact={true} path="/" component={Home} />
            <Route path="/post/:slug" component={Post} />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
