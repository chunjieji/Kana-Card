import React,{ useState} from 'react'
import { useHistory } from 'react-router-dom'
import './Mode.css'


const Mode = () => {
  const history = useHistory()
  const data1 = ['あ','か','さ','た','な','は','ま','や','ら','わ']
  const data2 = ['ア','カ','サ','タ','ナ','ハ','マ','ヤ','ラ','ワ']
  const [btnFlag,setBtnFlag] =useState(true)
  const [kana,setKana] =useState(new Map())
  const [mode,setMode] =useState('顺序模式')
  
  const SwitchStaus = (e) => {
    let content = e.target.innerHTML
    if(e.target.className === 'focus item'){
      e.target.className = 'unfocus item'
      setKana((old) => {
        old.delete(content)
        return old;
      })
    }else{
      e.target.className = 'focus item'
      setKana((old) => {
        old.set(content,'')
        return old;
      })
    }
  }
  const SwitchBtnStaus = () => {
    setBtnFlag((old) => !old)
    btnFlag?setMode('乱序模式'):setMode('顺序模式')
  }

  const start = () => {
    const data = {}
    data.mode = mode
    data.kana = [...kana].flat().filter((item) => item !== '')
    localStorage.setItem('data',JSON.stringify(data))
    if(data.kana.length === 0){
      alert('至少选择一个假名')
      return
    }
    history.push('/card')
  }

  
  return(
    <div style={{height: '100%'}}>
      <div className='mode-wapper'>
        <h3>平假名</h3>
        <div className='hira mode'>
          {
            data1.map((item, i) => {
              return (
                <div key={i} className='unfocus item' onClick={SwitchStaus}>{item}</div>
              )
            })
          }         
        </div>
      </div>
      <div className='mode-wapper'>
        <h3>片假名</h3>
        <div className='kana mode'>
        {
            data2.map((item, i) => {
              return (
                <div key={i} className='unfocus item' onClick={SwitchStaus}>{item}</div>
              )
            })
          }
        </div>
      </div>
      <div className='mode-wapper'>
          <h3>选择模式</h3>
          <div className='mode'>
            <div className={btnFlag?'focus mode-btn':'unfocus mode-btn'} onClick={SwitchBtnStaus}>顺序模式</div>
            <div className={btnFlag?'unfocus mode-btn':'focus mode-btn'} onClick={SwitchBtnStaus}>乱序模式</div>         
          </div>
      </div>
      <div className='mode-wapper' onClick={start}><h1>Start!</h1></div>
    </div>
  )
}

export default Mode;