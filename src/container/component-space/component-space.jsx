import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ClassComponent from '../../component/class';
import {
  Aside,
  Add,
} from './style';

class ComponentSpace extends PureComponent {

  render() {
    return (
      <Aside>
        <Add>
          add
        </Add>
        <ClassComponent />
      </Aside>
    );
  }
}

export default connect()(ComponentSpace);
