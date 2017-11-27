import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Block,
} from '../style';
import { Wrapper } from './style';

class ClassViewComponent extends PureComponent {

  static propTypes = {
    title: PropTypes.string,
  };

  handleDragStart = (event) => {
    const dataTransfer = event.dataTransfer;
    dataTransfer.effectAllowed = 'move';

    const data = JSON.stringify({ add: true });
    dataTransfer.setData('text/plain', data);
  }

  render() {
    return (
      <Wrapper
        draggable={true}
        onDragStart={this.handleDragStart}
        innerRef={el => { this.wrapperEl = el }}
      >
        <Block />
        <i>{this.props.title}</i>
      </Wrapper>
    );
  }
}

export default ClassViewComponent;
