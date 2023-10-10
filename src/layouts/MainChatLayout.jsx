import { useState } from 'react'
import Message from '../pages/mainChat/Message'
import Input from '../pages/mainChat/Input'
import MainChatHeader from '../components/MainChatHeader'
import { db, auth, storage } from '../firebase'
import { collection, addDoc, Timestamp, doc, setDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'
import { ref, getDownloadURL, uploadBytes } from 'firebase/storage'

const MainChatLayout = ({ avatarURL }) => {
  const [text, setText] = useState('')
  const [img, setImg] = useState('')
  const selectedChatUser = useSelector((state) => state.cart.selectedChatUser)

  const msgs = useSelector((state) => state.cart.msgs)
  // user1 is the currently logged in user
  const user1 = auth.currentUser
  const user2 = selectedChatUser ? selectedChatUser.uid : 'No selected user'

  const handleSubmit = async (e) => {
    e.preventDefault()

    const id = user1
      ? user1.uid > user2
        ? `${user1.uid + user2}`
        : `${user2 + user1.uid}`
      : 'User not authenticated'

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

    // messages => id => chat => add doc
    await addDoc(collection(db, 'messages', id, 'chat'), {
      text,
      from: user1 ? user1.uid : 'user not authenicated',
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
    })
    await setDoc(doc(db, 'lastMsg', id), {
      text,
      from: user1 ? user1.uid : 'user not authenicated',
      to: user2,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || '',
      unread: true,
    })
    setText('')
  }

  return (
    <div className='chat'>
      <MainChatHeader />
      <div className='messages'>
        {msgs.length
          ? msgs.map((msg, i) => (
              <Message
                key={i}
                msg={msg}
                user1={user1}
                selectedChatUser={selectedChatUser}
                avatarURL={avatarURL}
              />
            ))
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
