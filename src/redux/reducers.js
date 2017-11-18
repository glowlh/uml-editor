import { combineReducers } from 'redux';
import workspace from '../container/work-space/redux/reducer';

const reducers = combineReducers({
  workspace,
});

export default reducers;
