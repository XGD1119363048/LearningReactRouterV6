import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
  const params = useParams()
  const navigate = useNavigate()
  console.log(params.id)
  return (
    <div>
      Detail-<button onClick={() => {
        navigate('/detail/1000')
      }}>猜你喜欢</button>
    </div>
  )
}
