import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function NowPlaying() {
  const [list, setList] = useState([])
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=170730',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1701141714777230166786049","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data.data.films)
      setList(res.data.data.films)
    })
  }, [])

  const navigate = useNavigate()
  const handlePageChange = (id) => {
    // 跳转页面

    // query 传参 /detail?id=100
    // navigate(`/detail?id=${id}`)

    // 路由传参 /detail/100
    navigate(`/detail/${id}`)
  }
  
  
  return (
    <div>
      <ul>
      {
        list.map(item => <li key={item.filmId} onClick={() => {
          handlePageChange(item.filmId)
        }}>
          {item.name}
        </li>)
      }
      </ul>
    </div>
  )
}
