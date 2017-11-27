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
    onDrag: PropTypes.func,
  };

  handleDragStart = (event) => {
    const dataTransfer = event.dataTransfer;
    dataTransfer.effectAllowed = 'move';

    const data = JSON.stringify( {
      move: { id: this.props.id },
    });
    dataTransfer.setData('text/plain', data);
  }

  render() {
    return (
      <Wrapper
        top={this.props.top}
        left={this.props.left}
        draggable={true}
        onDragStart={this.handleDragStart}
      >
        <Block />
      </Wrapper>
    );
  }
}

export default ClassComponent;
