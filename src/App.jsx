import React, { PureComponent } from 'react';
import ComponentSpace from './container/component-space';
import { Wrapper } from './style';

class App extends PureComponent {
  render() {
    return (
      <Wrapper>
        <ComponentSpace />
      </Wrapper>
    );
  }
}

export default App;
