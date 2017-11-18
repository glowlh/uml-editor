import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Block,
  Wrapper,
} from './style';

class ClassComponent extends PureComponent {

  static propTypes = {
    id: PropTypes.string,
    top: PropTypes.number,
    left: PropTypes.number,
    title: PropTypes.string,
    onDrag: PropTypes.func,
  }

  handleDrag = (event) => {
    if (this.props.onDrag) {
      this.props.onDrag({
        top: event.clientY,
        left: event.clientX,
      });
    }
  }

  render() {
    return (
      <Wrapper
        top={this.props.top}
        left={this.props.left}
        onDrag ={this.handleDrag}
      >
        <Block />
        <div>{this.props.title}</div>
      </Wrapper>
    );
  }
}

export default ClassComponent;
