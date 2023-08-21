import { useState } from 'react'
import Messages from '../pages/mainChat/Messages'
import Input from '../pages/mainChat/Input'
import MainChatHeader from '../components/MainChatHeader'
import { db, auth } from '../firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { setSelectedChatUser } from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const MainChatLayout = () => {
  const [text, setText] = useState('')
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)
  // user1 is the currently logged in user
  const user1 = auth.currentUser.uid

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user2 = selectedChatUser.uid
    const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`

    // messages => id => chat => add doc
    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1,
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
    })
    setText('')
  }
  return (
    <div className='chat'>
      <MainChatHeader />
      <Messages />
      <Input handleSubmit={handleSubmit} text={text} setText={setText} />
    </div>
  )
}

export default MainChatLayout
