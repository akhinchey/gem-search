import {
  createSlice
} from '@reduxjs/toolkit';

const gemSearchSlice = createSlice({
  name: 'gemSearch',
  initialState: {
    currentGems: [],
    savedGems: [],
    currentSearch: null
  },
  reducers: {
    setCurrentGems(state, action) {
      state.currentGems = action.payload;
    },
    saveGem(state, action) {
      const newGem = action.payload;
      state.savedGems.unshift(newGem);
    },
    unsaveGem(state, action) {
      const gemToUnsave = action.payload;
      state.savedGems = state.savedGems.filter(
        gem => gem.name !== gemToUnsave.name
      );
    },
    setCurrentSearch(state, action) {
      state.currentSearch = action.payload;
    }
  }
});

const {
  actions,
  reducer
} = gemSearchSlice;

export const {
  saveGem,
  unsaveGem,
  setCurrentGems,
  setCurrentSearch
} = actions;

export default reducer;