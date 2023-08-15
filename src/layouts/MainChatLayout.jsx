import Messages from '../pages/mainChat/Messages'
import Input from '../pages/mainChat/Input'
import MainChatHeader from '../components/MainChatHeader'

const MainChatLayout = () => {
  return (
    <div className='chat'>
      <MainChatHeader />
      <Messages />
      <Input />
    </div>
  )
}

export default MainChatLayout
