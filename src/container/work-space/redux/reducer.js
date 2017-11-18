import Type from './types';

const TOP_POSITION_DEFAULT = 35;
const LEFT_POSITION_DEFAULT = 25;

const initialState = {
  components: {},
};

const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case (Type.ADD_COMPONENT): {
      const components = { ...state.components };
      const item = action.payload;
      components[item.id] = {
        top: TOP_POSITION_DEFAULT,
        left: LEFT_POSITION_DEFAULT,
      };

      return { ...state, components };
    }
    case (Type.MOVE_COMPONENT): {
      const components = { ...state.components };
      const item = action.payload;
      components[item.id] = {
        top: item.top,
        left: item.left,
      };

      return { ...state, components };
    }
    default:
      return state;
  }
};

export default workspaceReducer;
