import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import sC from '../class.style';
import sV from './view.style';

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
      <sV.Wrapper
        draggable={true}
        onDragStart={this.handleDragStart}
        innerRef={el => { this.wrapperEl = el }}
      >
        <sC.Block />
        <i>{this.props.title}</i>
      </sV.Wrapper>
    );
  }
}

export default ClassViewComponent;
