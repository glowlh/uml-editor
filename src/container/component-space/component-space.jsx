import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClassComponent from '../../component/class';
import { addComponent } from '../work-space/redux/actions';
import {
  Aside,
  Add,
} from './style';

class ComponentSpace extends PureComponent {

  static propTypes = {
    workComponents: PropTypes.object.isRequired,
    onAddComponentToWorkspace: PropTypes.func.isRequired,
  };

  handleClickAdd = () => {
    const id = Object.keys(this.props.workComponents).length;
    this.props.onAddComponentToWorkspace({ id });
  }

  render() {
    return (
      <Aside>
        <Add onClick={this.handleClickAdd}>
          add
        </Add>
        <ClassComponent title="Class" />
      </Aside>
    );
  }
}

export default connect(
  state => ({
    workComponents: state.workspace.components,
  }),
  { onAddComponentToWorkspace: addComponent },
)(ComponentSpace);
