import ChatList from '../pages/chatList/ChatList'
import Search from '../pages/chatList/Search'

const ChatListLayout = () => {
  return (
    <div className='chat-layout'>
      <h2>Chats</h2>
      <Search />
      <ChatList />
    </div>
  )
}

export default ChatListLayout
