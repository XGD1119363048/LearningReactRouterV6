import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Navigate, Route, Routes } from 'react-router-dom'
import Redirect from '../components/Redirect'
import Center from '../views/Center'
import Cinemas from '../views/Cinemas'
import Films from '../views/Films'
import ComingSoon from '../views/films/ComingSoon'
import NowPlaying from '../views/films/NowPlaying'
import NotFound from '../views/NotFound'
import Search from '../views/Search'
// import Detail from '../views/Detail_Search'
import Detail from '../views/Detail'

export default function MRouter() {
  return (
    <Routes>
      {/* <Route path='/' element={<Films />} /> */}
      {/* <Route index element={<Films />} /> */}
      <Route path='/films' element={<Films />}>
        {/* <Route index element={<NowPlaying />} /> */}
        <Route index element={<Redirect to='/films/nowplaying' />} />
        <Route path='nowPlaying' element={<NowPlaying />} />
        <Route path='comingSoon' element={<ComingSoon />} />
      </Route>

      <Route path='/cinemas' element={<Cinemas />} />
      <Route path='/cinemas/search' element={<Search />} />
      <Route path='/center' element={<Center />} />

      {/* 动态路由 /detail/***** */}
      <Route path='/detail/:id' element={<Detail />} />

      {/* 重定向方案1：使用 Navigate 组件 */}
      {/* <Route path='*' element={<Navigate to='/films' />} /> */}
      
      {/* 重定向方案2：自定义 Redirect 组件 */}
      <Route path='/' element={<Redirect to='/films' />} />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
