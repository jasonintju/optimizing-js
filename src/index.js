import React from 'react';
import ReactDom from 'react-dom';
import 'normalize.css';
import App from '@containers/App/App';

ReactDom.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
