import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmItem(item) {
  const navigate = useNavigate()

  const handlePageChange = (id) => {
    // 跳转页面

    // query 传参 /detail?id=100
    // navigate(`/detail?id=${id}`)

    // 路由传参 /detail/100
    navigate(`/detail/${id}`)
  }
  return (
    <li onClick={() => handlePageChange(item.filmId)}>
      {item.name}
    </li>
  )
}
