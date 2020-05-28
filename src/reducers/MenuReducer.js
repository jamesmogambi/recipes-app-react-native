
export default (state = [], action) => {
    switch (action.type) {
      case 'SET_MENU':
        return action.data;
      default:
        return state;
    }
  };
  