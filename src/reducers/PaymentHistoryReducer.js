
export default (state = [], action) => {
  switch (action.type) {
    case 'SET_PAYMENT_HISTORY':
      return action.data;
      case 'ADD_PAYMENT_RECORD':
        return [
          ...state,
          action.transaction
        ];
    default:
      return state;
  }
};
