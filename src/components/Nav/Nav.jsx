import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './Nav.css'
import home from './home.png'
import returnImg from './return.png'


const Nav = () => {
  const history = useHistory()
  const location = useLocation()
  let title = '首页'
  switch (location.pathname) {
    case '/overview/Hiragana': title = '平假名总览'
      break;
    case '/overview/Katagana': title = '片假名总览'
      break;
    case '/mode': title = '模式选择'
      break;
    case '/card': title = '游戏中'
      break;
    default : title = '首页'
  }
  
  return(
    <div className='nav' style={{height: '8%'}}>
      {location.pathname === '/'?<div className='place-holder'></div>:<div className='return' onClick={() => {history.go(-1)}}><img src={returnImg} alt="返回"/></div>}
      <div className='title'>{title}</div>
      <div className='home' onClick={() => {history.push('/')}}><img src={home} alt="首页"/></div>
    </div>
  )
}

export default Nav;