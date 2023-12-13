import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Redirect from '../components/Redirect'
// import Center from '../views/Center'
// import Cinemas from '../views/Cinemas'
// import Films from '../views/Films'
// import ComingSoon from '../views/films/ComingSoon'
// import NowPlaying from '../views/films/NowPlaying'
// import NotFound from '../views/NotFound'
// import Search from '../views/Search'
// import Detail from '../views/Detail'
// import Login from '../views/Login'

export default function MRouter() {
  return (
    <Routes>
      {/* <Route path='/' element={<Films />} /> */}
      {/* <Route index element={<Films />} /> */}
      <Route path='/films' element={lazyLoad('Films')}>
        {/* <Route index element={<NowPlaying />} /> */}
        <Route index element={<Redirect to='/films/nowplaying' />} />
        <Route path='nowPlaying' element={lazyLoad('films/NowPlaying')} />
        <Route path='comingSoon' element={lazyLoad('films/ComingSoon')} />
      </Route>

      <Route path='/cinemas' element={lazyLoad('Cinemas')} />
      <Route path='/cinemas/search' element={lazyLoad('Search')} />
      {/* <Route path='/center' element={isAuth() ? <Center /> : <Redirect  to='/login' />} /> */}
      <Route path='/center' element={<AuthComponent>
        {lazyLoad('Center')}
      </AuthComponent>} />

      {/* render = {() => isAuth() ? <Center /> : <Redirect  to='/login' />} */}

      <Route path='/login' element={lazyLoad('Login')} />

      {/* 动态路由 /detail/***** */}
      <Route path='/detail/:id' element={lazyLoad('Detail')} />

      {/* 重定向方案1：使用 Navigate 组件 */}
      {/* <Route path='*' element={<Navigate to='/films' />} /> */}
      
      {/* 重定向方案2：自定义 Redirect 组件 */}
      <Route path='/' element={<Redirect to='/films' />} />

      <Route path='*' element={lazyLoad('NotFound')} />
    </Routes>
  )
}

function AuthComponent({children}) {
  const isLogin = localStorage.getItem('token')
  return isLogin ? children : <Redirect to='/login' />
}

// 路由懒加载封装
const lazyLoad = (path) => {
  const Comp = React.lazy(() => import(`../views/${path}`))
  return (
    <React.Suspense fallback={<>加载中...</>}>
      <Comp />
    </React.Suspense>
  )
}
