import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()   //获取导航栏上面的参数
  const [params] = useSearchParams()
  console.log(params.get('name'));

  const location = useLocation()   //获取state  状态刷新不会消失
  console.log(location);

  const login = () => {
    navigate('/')
  }
  return (
    <div>
      <button onClick={login}>登录</button>
    </div>
  )
}

