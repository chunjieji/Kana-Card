import React, { useRef, useState } from 'react'
import './Card.css'
import next from './next.png'
import play from './play.png'
import { kana, hira } from './kana'




const Card = () => {
  const data = JSON.parse(localStorage.getItem('data'))
  let contentArr = []
  // 查找平假名片假数组，得到要显示的内容
  for(let i = 0;i < data.kana.length;i++){
    for(const key in kana){
      if(key === data.kana[i]){
        contentArr = [...contentArr,...kana[key]]
      }
    }
    for(const key in hira){
      if(key === data.kana[i]){
        contentArr = [...contentArr,...hira[key]]
      }
    }
  }
  

  // 洗牌算法
  Array.prototype.shuffle = function() {
    for (let i = this.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i - 1));
        const itemAtIndex = this[randomIndex];

        this[randomIndex] = this[i];
        this[i] = itemAtIndex;
    };
  };

  if(data.mode === '乱序模式') contentArr.shuffle();
  //一次练习的量最多为10
  let contentLength = contentArr.length >= 10?10:contentArr.length

  const voice = useRef(null)
  const playMusic = () => {
    voice.current.play()
  }
  const [i,setIndex] = useState(0);

  return(
    <div style={{height: '100%'}}>
      <audio ref={voice} src={`http://chunjiez.com:3000/audio/${contentArr[i].voice}`}></audio>
      <div className='progress'>{i+1}/{contentLength}</div>
      <div className='card-content'>{contentArr[i].content}</div>
      <div className='card-rome'>{contentArr[i].rome}</div>
      <div className='btn-box'>
        <div className='play btn' onClick={playMusic}><img src={play} alt=""/></div>
        {i === 0?null:<div className='pre btn' onClick={() => {setIndex((old) => old - 1)}}><img src={next} alt=""/></div>}
        {i === contentLength-1?null:<div className='next btn' onClick={() => {setIndex((old) => old + 1)}}><img src={next} alt=""/></div>}
      </div>
    </div>
  )
}

export default Card;