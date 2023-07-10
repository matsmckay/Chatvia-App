import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  console.error(error)

  return (
    <div className='error-page'>
      <h1>Oops!</h1>
      <p>sorry, an unexpected error has occurred!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
