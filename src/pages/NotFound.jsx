import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className='error-page'>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti minus
        deserunt natus ullam facilis. Quo recusandae possimus maiores enim
        aliquam, repellat suscipit, blanditiis repellendus consequatur sint
        doloremque itaque explicabo libero.
      </p>
      <p>
        Go to the <Link to='/'>Homepage</Link>.
      </p>
    </div>
  )
}
