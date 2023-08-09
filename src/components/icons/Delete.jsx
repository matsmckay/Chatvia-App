import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Delete = ({ deleteImage }) => {
  return (
    <div className='delete-avatar'>
      <FontAwesomeIcon icon={faTrashCan} onClick={deleteImage} />
    </div>
  )
}

export default Delete
