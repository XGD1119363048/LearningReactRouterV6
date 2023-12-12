import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import Films from '../views/Films'

export default function MRouter() {
  return (
    <Routes>
      <Route path='/films' element={<Films />} />
      <Route path='/cinemas' element={<Cinemas />} />
      <Route path='/center' element={<Center />} />
    </Routes>
  )
}
