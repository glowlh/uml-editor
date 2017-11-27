import { combineReducers } from 'redux';
import workspace from '../workspace/redux/reducer';

const reducers = combineReducers({
  workspace,
});

export default reducers;
