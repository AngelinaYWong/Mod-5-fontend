export const makeSearch = (searchList) => {
  return {
    type: 'SEARCH_STATE_CHANGE',
    payload: searchList
  }
}

export const showBoards = (boardClick) => {
  return {
    type: 'CLICK_BOARD_BUTTON',
    payload: "board"
  }
}

export const showSearchContainer = (searchContainerClick) => {
  return {
    type: 'CLICK_BOARD_BUTTON',
    payload: "search"
  }
}

export const getBoard = (board_id) => {
  // console.log("board_id", board_id)

  return {
    type: 'GET_BOARD',
    payload: board_id
  }
}
