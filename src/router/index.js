import React from 'react'
import { useRoutes } from 'react-router-dom'
import Redirect from '../components/Redirect'

export default function MRouter() {
  const element = useRoutes([
    {
      path: '/',
      element: <Redirect to='/films' />
    },
    {
      path: '/films',
      element: lazyLoad('Films'),
      children: [
        {
          path: '',
          element: <Redirect to='/films/nowplaying' />
        },
        {
          path: 'nowplaying',
          element: lazyLoad('films/NowPlaying')
        },
        {
          path: 'comingsoon',
          element: lazyLoad('films/ComingSoon')
        }
      ]
    },
    {
      path: '/cinemas',
      element: lazyLoad('Cinemas')
    },
    {
      path: '/cinemas/search',
      element: lazyLoad('Search')
    },
    {
      path: '/center',
      element: <AuthComponent>
        {lazyLoad('Center')}
      </AuthComponent>
    },
    {
      path: '/login',
      element: lazyLoad('Login')
    },
    {
      path: '/detail/:id',
      element: lazyLoad('Detail')
    },
    {
      path: '*',
      element: lazyLoad('NotFound')
    }
  ])
  return (
    element
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
