import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  Wrapper,
} from './style';

class ClassComponent extends PureComponent {

  render() {
    return (
      <Wrapper>
        <Block />
        <div>Class</div>
      </Wrapper>
    );
  }
}

export default ClassComponent;
