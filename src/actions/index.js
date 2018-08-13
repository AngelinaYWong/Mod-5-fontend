export const makeSearch = (searchList) => {
  return {
    type: 'SEARCH_STATE_CHANGE',
    payload: searchList
  }
}
