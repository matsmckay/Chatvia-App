import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/chats' element={<Chats />} />
          <Route path='/groupchats' element={<GroupChats />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
