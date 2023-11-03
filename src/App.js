import React from 'react'
import Header from './components/header'
import './App.css'
import Balance from './components/balance'
import Accsummary from './components/accsummary'
import Transchistory from './components/transchistory'
import Addtransc from './components/addtransc'

const App = () => {
  return (
    <div>
      <Header/>
      <div className='container'>
      <Balance/>
      <Accsummary/>
      <Transchistory/>
      <Addtransc/>
      </div>
    </div>
  )
}

export default App