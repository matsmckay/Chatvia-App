import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = () => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>
}

export default AuthProvider
