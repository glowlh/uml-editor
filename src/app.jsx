import React, { PureComponent } from 'react';
import ComponentSpace from './sidebar';
import WorkSpace from './workspace';
import { Wrapper } from './style';

class App extends PureComponent {
  render() {
    return (
      <Wrapper>
        <ComponentSpace />
        <WorkSpace />
      </Wrapper>
    );
  }
}

export default App;
