import React from 'react'
import { useLocation } from 'react-router-dom'
import './Overview.css'


const Overview = () => {
  const Hiragana = [
    ['','a','i','u','e','o'],
    ['','あ','い','う','え','お'],
    ['k-','か','き','く','け','こ'],
    ['s-','さ','し','す','せ','そ'],
    ['t-','た','ち','つ','て','と'],
    ['n-','な','に','ぬ','ね','の'],
    ['h-','は ','ひ','ふ','へ','ほ'],
    ['m-','ま','み','む','め','も'],
    ['y-','や','','ゆ','','よ'],
    ['r-','ら','り','る','れ','ろ'],
    ['w-','わ','','','','を'],
    ['n','ん','','','',''],
  ]
  const Kanagana = [
    ['','a','i','u','e','o'],
    ['','ア','イ','ウ','エ','オ'],
    ['k-','カ','キ','ク','ケ','コ'],
    ['s-','サ','シ','ス','セ','ソ'],
    ['t-','タ','チ','ツ','テ','ト'],
    ['n-','ナ','ニ','ヌ','ネ','ノ'],
    ['h-','ハ ','ヒ','フ','ヘ','ホ'],
    ['m-','マ','ミ','ム','メ','モ'],
    ['y-','ヤ','','ユ','','ヨ'],
    ['r-','ラ','リ','ル','レ','ロ'],
    ['w-','ワ','','','','ヲ'],
    ['n','ン','','','',''],
  ]
  const content = (useLocation().pathname === '/overview/Katagana'?Kanagana:Hiragana)
  return(
    <div className='overview' style={{height: '100%'}}>
      <table className='table'>
        <thead>
        {
          content.map((item,index) => {
            return(
              <tr key={index}>
                {
                  item.map((item,index) => {
                    return(
                      <td key={index}>{item}</td>
                    )
                  })
                }
              </tr>
            )
            
          })
        }
        </thead>
       
      </table>
    </div>
  )
}

export default Overview;