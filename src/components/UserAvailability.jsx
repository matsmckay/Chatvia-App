import currentUserPic from '../assets/users/avatar-1.jpg'
import { useState, useEffect } from 'react'
import { storage, db, auth } from '../firebase'
import {
  ref,
  getDownloadURL,
  uploadBytes,
  deleteObject,
} from 'firebase/storage'
import { getDoc, doc, updateDoc } from 'firebase/firestore'
import Delete from './icons/Delete'
import Camera from './icons/Camera'
import { useNavigate } from 'react-router-dom'

const UserAvailability = () => {
  const [img, setImg] = useState('')
  const [user, setUser] = useState(null)
  const navigate = useNavigate('')

  // need to work with firebase storage here
  useEffect(() => {
    getDoc(doc(db, 'users', auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data())
      }
    })

    if (img) {
      // before image upload we will grab user
      const uploadImg = async () => {
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        )
        try {
          if (user.avatarPath) {
            await deleteObject(ref(storage, user.avatarPath))
          }
          const snap = await uploadBytes(imgRef, img)
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath))

          await updateDoc(doc(db, 'users', auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
            // need this so we can delete the image later
          })
          console.log(url)
          setImg('')
        } catch (err) {
          console.log(err.message)
        }
      }
      uploadImg()
    }
  }, [img])

  const deleteImage = async () => {
    try {
      const confirm = window.confirm('Delete avatar?')
      if (confirm) {
        await deleteObject(ref(storage, user.avatarPath))

        await updateDoc(doc(db, 'users', auth.currentUser.uid), {
          avatar: '',
          avatarPath: '',
        })
        navigate('/chats')
      }
    } catch (err) {
      console.log(err.message)
    }
  }

  return user ? (
    <section>
      <div className='availability-container'>
        <div className='profile-img-container'>
          <img
            src={user.avatar || currentUserPic}
            alt='Profile pic or avatar of current user'
          />
          <div className='overlay'>
            <div className='profile-icons'>
              <label htmlFor='photo'>
                <Camera />
              </label>
              {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
              <input
                type='file'
                accept='image/*'
                id='photo'
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div className='profile-text-container'>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>Joined on: {user.createdAt.toDate().toDateString()}</p>
        </div>
      </div>
    </section>
  ) : null
}

export default UserAvailability
