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

  handleDragStart = (event) => {
    const dataTransfer = event.dataTransfer;
    dataTransfer.effectAllowed = 'move';
    dataTransfer.setData('text/plain', this.props.id);
  }

  render() {
    return (
      <Wrapper
        top={this.props.top}
        left={this.props.left}
        draggable={true}
        onDragStart={this.handleDragStart}
        innerRef={el => { this.wrapperEl = el }}
      >
        <Block />
        <div>{this.props.title}</div>
      </Wrapper>
    );
  }
}

export default ClassComponent;
