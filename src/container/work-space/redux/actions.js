import Type from './types';

export const addComponent = (payload) => ({
  payload,
  type: Type.ADD_COMPONENT,
});

export const moveComponent = (payload) => ({
  payload,
  type: Type.MOVE_COMPONENT,
});
