import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chatList: [],
  selectedChatUser: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setChatList: (state, action) => {
      state.chatList = action.payload
    },
    setSelectedChatUser: (state, action) => {
      state.selectedChatUser = action.payload
    },
  },
})

// console.log(cartSlice)
export const { setChatList, setSelectedChatUser } = cartSlice.actions

export default cartSlice.reducer
