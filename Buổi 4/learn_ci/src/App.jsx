import UseInfoForm from './components/UserInfoForm'
import { useState } from 'react'
import './App.css'

function App() {
  const [UserInfo, setUserInfor] = useState("")
  const [email, setEmail] = useState("")

  const updateUserInfo = () => {
    setUserInfor({ name: name, email: email })
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '100vw',
        }}
      >
        <UseInfoForm setUserInfor={setUserInfor} />
        <p>Name: {UserInfo.name}</p>
        <p>Email: {UserInfo.email}</p>
      </div>
    </>
  )
}

export default App
