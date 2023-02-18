import { useState } from 'react'
import { Modal } from './components/modal/Modal'
import './App.css'
import { Header } from './components/header/Header'
import Main from './components/main/Main'

function App() {
  const [modalStatus,setModalStatus] = useState(false)
  
  return (
    <div className="App">
      {modalStatus ? <Modal setModalStatus={setModalStatus}/>:
      <>
      <Header setModalStatus={setModalStatus}/>
      <Main />
      </>
      }   
    </div>
  )
}

export default App
