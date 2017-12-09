import React, { PureComponent } from 'react';
import ComponentSpace from './sidebar';
import WorkSpace from './workspace';
import s from './style';
import './style.reset';

class App extends PureComponent {
  render() {
    return (
      <s.Wrapper>
        <ComponentSpace />
        <WorkSpace />
      </s.Wrapper>
    );
  }
}

export default App;
