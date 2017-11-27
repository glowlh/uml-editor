import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClassComponent from '../ui/class/index';
import { moveComponent } from './redux/actions';
import { Main } from './style';

class WorkSpace extends PureComponent {

  static propTypes = {
    components: PropTypes.object.isRequired,
    onMoveComponent: PropTypes.func,
  };

  handleDrop = (event) => {
    const dataTransfer = event.dataTransfer;
    const id = dataTransfer.getData('text/plain');
    const offsetLeft = this.wrapperEl.offsetLeft;
    if (this.props.onMoveComponent) {
      this.props.onMoveComponent({
        id,
        top: event.clientY,
        left: event.clientX - offsetLeft,
      });
    }
  }

  handleDragOver = (event) => {
    event.preventDefault();
  }

  defineComponents() {
    const components = this.props.components;

    return Object.keys(components).map((id) => {
      return (
        <ClassComponent
          top={components[id].top}
          left={components[id].left}
          id={id}
          key={id}
        />
      );
    });
  }

  render() {
    const components = this.defineComponents();

    return (
      <Main
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        innerRef={el => this.wrapperEl = el}
      >
        {components}
      </Main>
    );
  }
}

export default connect(
  state => ({
    components: state.workspace.components,
  }),
  ({
    onMoveComponent: moveComponent
  }),
)(WorkSpace);
