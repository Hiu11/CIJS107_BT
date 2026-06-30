import UseInfoForm from './components/UserInfoForm'
import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [UserInfo, setUserInfor] = useState("")
  const [email, setEmail] = useState("")

  const updateUserInfo = () => {
    setUserInfor({ name: name, email: email })
  }
  const getUsers = async () => { 
    try {
      const data = await axios.get('https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=692d775feb9af6041e0d8937')
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
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
