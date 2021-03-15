import React from 'react'
import Btn from '../Btn/Btn.jsx'


const ModeBtnGrounp = () => {
  return(
    <div>
      <p>选择假名种类</p>
      <div>
        <Btn content='平假名' />
        <Btn content='片假名' />
      </div>
    </div>
  )
}

export default ModeBtnGrounp;