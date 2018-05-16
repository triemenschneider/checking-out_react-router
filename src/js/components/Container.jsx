import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Four0Four from './Four0Four';
import Form from './Form';
import Github from './Github';

class Container extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <h1>
            My <strong>React Router</strong> Excercise
          </h1>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" render={() => <About title="Abaut" />} />
            <Route path="/form" component={Form} />
            <Route path="/github" component={Github} />
            <Route component={Four0Four} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Container;
