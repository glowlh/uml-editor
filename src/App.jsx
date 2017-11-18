import React, { PureComponent } from 'react';
import ComponentSpace from './container/component-space';
import WorkSpace from './container/work-space';
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
