import { useState } from 'react'
import Message from '../pages/mainChat/Message'
import Input from '../pages/mainChat/Input'
import MainChatHeader from '../components/MainChatHeader'
import { db, auth, storage } from '../firebase'
import { collection, addDoc, Timestamp, doc, setDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'

const MainChatLayout = () => {
  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)
  const msgs = useSelector((state) => state.cart.msgs)
  // user1 is the currently logged in user

  const handleSubmit = async (e) => {
    e.preventDefault()

    const user2 = selectedChatUser ? selectedChatUser.uid : 'No selected user'
    console.log('user2:', user2)

    const user1 = auth.currentUser
    console.log('user1:', user1 ? user1.uid : 'User not authenticated')

    const id = user1
      ? user1.uid > user2
        ? `${user1.uid + user2}`
        : `${user2 + user1.uid}`
      : 'User not authenticated'
    console.log('id:', id)
    let url
    if (img) {
      const imgRef = ref(
        storage,
        `images/${new Date().getTime()} - ${img.name}`
      )
      const snap = await uploadBytes(imgRef, img)
      const dlurl = await getDownloadURL(ref(storage, snap.ref.fullPath))
      url = dlurl
    }

    console.log('message data:', {
      text,
      from: user1 ? user1.uid : 'user not authenicated',
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
    })

    // messages => id => chat => add doc
    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1 ? user1.uid : 'user not authenicated',
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
    })
    setText('')
  }

  return (
    <div className='chat'>
      <MainChatHeader />
      <div className='messages'>
        {msgs.length
          ? msgs.map((msg, i) => <Message key={i} msg={msg} />)
          : null}
      </div>
      <Input
        handleSubmit={handleSubmit}
        text={text}
        setText={setText}
        setImg={setImg}
      />
    </div>
  )
}

export default MainChatLayout
