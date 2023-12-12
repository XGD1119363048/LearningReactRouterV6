import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default function Tabbar() {
  return (
    <footer>
      <ul>
        <li>
          <NavLink to='/films' className={({isActive}) => isActive ? style.active : ''}>电影</NavLink>
        </li>
        <li>
          <NavLink to='/cinemas' className={({isActive}) => isActive ? style.active : ''}>影院</NavLink>
        </li>
        <li>
          <NavLink to='/center' className={({isActive}) => isActive ? style.active : ''}>我的</NavLink>
        </li>
      </ul>
    </footer>
  )
}
