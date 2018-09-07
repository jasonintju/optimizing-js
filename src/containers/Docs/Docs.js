import React from 'react';
import { arraySum } from '@utils/utils';
import './Docs.scss';

class About extends React.Component {
  render() {
    const sum = arraySum([1, 3]);
    return (
      <div className="page-docs">
        <h1>Docs Page</h1>
        <div> 1 plus 3 equals {sum}</div>
      </div>
    );
  }
}
export default About;
