import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  chatList: [],
  selectedChatUser: null,
  msgs: [],
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
    setMsgs: (state, action) => {
      state.msgs = action.payload
    },
  },
})

// console.log(cartSlice)
export const { setChatList, setSelectedChatUser, setMsgs } = cartSlice.actions

export default cartSlice.reducer
