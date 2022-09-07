import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Login from './componants/Login';
import Home from './container/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useState, useEffect } from 'react';
import { userQuery } from './utils/data'
import { client } from './client'



function App() {
  const navigate = useNavigate()

  const [user, setUser] = useState()

  const userInfo = localStorage.getItem('user') !== 'undefined' ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()

  useEffect(() => {
    const query = userQuery(userInfo?.sub)

    client.fetch(query).then((date) => {
      setUser(date[0])
    })

    if (!user) {
      navigate('/login')
    } {
      navigate('/')
    }
  }, [])


  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </GoogleOAuthProvider>
  );
}

export default App;
