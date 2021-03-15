import React from 'react'
import { useHistory } from 'react-router-dom'
import './HomePage.css'


const HomePage = () => {
  const history = useHistory()
  return(
    <div style={{height: '100%', position: 'relative'}}>
      <div className='home-btn'>
        <div className="btn" onClick={ () => {history.push('/mode')}}>选择模式</div>
        <div className="btn" onClick={ () => {history.push('/overview/Hiragana')}}>平假名总览</div>
        <div className="btn" onClick={ () => {history.push('/overview/Katagana')}}>片假名总览</div>
      </div>
    </div>
  )
}

export default HomePage;