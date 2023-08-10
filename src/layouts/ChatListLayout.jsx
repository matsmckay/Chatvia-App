import { useEffect, useState } from 'react'
import { db, auth } from '../firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import ChatList from '../pages/chatList/ChatList'
import Search from '../pages/chatList/Search'
import { Outlet } from 'react-router-dom'

const ChatListLayout = () => {
  return (
    <>
      <Search />
      <ChatList />
    </>
  )
}

export default ChatListLayout
