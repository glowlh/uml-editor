import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ClassViewComponent from '../ui/class/view';
import { addComponent } from '../workspace/redux/actions';
import {
  Aside,
  Add,
} from './style';

class Sidebar extends PureComponent {

  static propTypes = {
    workComponents: PropTypes.object.isRequired,
    onAddComponent: PropTypes.func.isRequired,
  };

  handleClickAdd = () => {
    const id = Object.keys(this.props.workComponents).length;
    this.props.onAddComponent({ id });
  }

  render() {
    return (
      <Aside>
        <Add onClick={this.handleClickAdd}>
          add
        </Add>
        <ClassViewComponent title="Class" />
      </Aside>
    );
  }
}

export default connect(
  state => ({
    workComponents: state.workspace.components,
  }),
  { onAddComponent: addComponent },
)(Sidebar);
