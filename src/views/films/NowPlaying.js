import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import FilmItem from './FilmItem_func'
import FilmItem from './FilmItem'

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

  return (
    <div>
      <ul>
        {
          list.map(item => <FilmItem key={item.filmId} {...item} />)
        }
      </ul>
    </div>
  )
}
