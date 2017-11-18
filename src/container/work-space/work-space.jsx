import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClassComponent from '../../component/class';
import { Main } from './style';

class WorkSpace extends PureComponent {

  static propTypes = {
    components: PropTypes.object.isRequired,
  };

  handleDragComponent = (position) => {
    console.dir(position);
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
          onDrag={this.handleDragComponent}
        />
      );
    });
  }

  render() {
    const components = this.defineComponents();

    return (
      <Main>
        {components}
      </Main>
    );
  }
}

export default connect(
  state => ({
    components: state.workspace.components,
  })
)(WorkSpace);
