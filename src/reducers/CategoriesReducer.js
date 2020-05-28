
export default (state = [], action) => {
    switch (action.type) {
      case 'SET_CATEGORIES':
        return action.data;
      default:
        return state;
    }
  };
  