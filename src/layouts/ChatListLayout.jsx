import ChatList from '../pages/chatList/ChatList'
import Search from '../pages/chatList/Search'

const ChatListLayout = () => {
  return (
    <div className='chat-layout'>
      <Search />
      <ChatList />
    </div>
  )
}

export default ChatListLayout
