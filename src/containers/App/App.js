import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Home from '@containers/Home/Home';
import Docs from '@containers/Docs/Docs';
import About from '@containers/About/About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Route exact path="/" component={Home} />
          <Route path="/docs" component={Docs} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
