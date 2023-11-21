import React from 'react'

import './assets/main.css'
const Main = (props) => {
  return (
    <div className='main-container'>
       {props.children}
    </div>
  )
}

export default Main;