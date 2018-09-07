import React from 'react';
import ReactDom from 'react-dom';
import App from '@containers/App/App';
import './normalize.css';

ReactDom.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
