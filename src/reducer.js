const initialState = {
  searchList: [],
  selectedBoard: '1',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_STATE_CHANGE':
    console.log(action.payload)
      return { ...state, searchList: action.payload }
    // case 'CLICK_BOARD_BUTTON':
    //   return { ...state, clickedView: action.payload }
    case 'GET_BOARD':
      console.log(action.payload)
      return { ...state, selectedBoard: action.payload }
    default:
    return state;
  }
};
