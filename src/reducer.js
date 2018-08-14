const initialState = {
  searchList: [],
  selectedBoard: '',

}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_STATE_CHANGE':
    // console.log(action.payload)
      return { ...state, searchList: action.payload }

    default:
    return state;
  }
};
