import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClassComponent from '../ui/class/index';
import {
  moveComponent,
  addComponent,
} from './redux/actions';
import s from './work-space.style';

class WorkSpace extends PureComponent {

  static propTypes = {
    components: PropTypes.object.isRequired,
    onMoveComponent: PropTypes.func,
    onAddComponent: PropTypes.func,
  };

  handleDrop = (event) => {
    const dataTransfer = event.dataTransfer;
    const data = JSON.parse(dataTransfer.getData('text/plain'));

    if (data.move) {
      const offsetLeft = this.wrapperEl.offsetLeft;
      if (this.props.onMoveComponent) {
        this.props.onMoveComponent({
          id: data.move.id,
          top: event.clientY,
          left: event.clientX - offsetLeft,
        });
      }
    } else if (data.add) {
      const id = Object.keys(this.props.components).length;
      this.props.onAddComponent({ id });
    }
  }

  handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
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
      <s.Main
        onDrop={this.handleDrop}
        onDragOver={this.handleDragOver}
        innerRef={el => this.wrapperEl = el}
      >
        {components}
      </s.Main>
    );
  }
}

export default connect(
  state => ({
    components: state.workspace.components,
  }),
  {
    onMoveComponent: moveComponent,
    onAddComponent: addComponent,
  },
)(WorkSpace);
