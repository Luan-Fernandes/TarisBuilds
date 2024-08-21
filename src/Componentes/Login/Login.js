import React from 'react'
import './Login.css'

import { useState,useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading} = useAuthentication();
  
  const logar = async (e) => {
    e.preventDefault(); 

    setError("");

    const user = {
      email,
      password
    }

    const res = await login(user)
    console.log(res)
  }

  useEffect(() => {
    if(authError){
      setError(authError)
    }
  },[authError])
  console.log(error)

   
  return (
    <div className='container'>
      <main className='container-main-login'>
        <h1>LOGIN</h1>
        <form className='container-form-login'>
          <label>EMAIL:
            <input type="email" name='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='EXP:teste@teste.com' />
          </label>
          <label>
            SENHA: 
            <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='EXP:123456' />
          </label>
          {!loading && <input onClick={logar} className='button' type="button" value="Logar"/> }
          {loading && <input desable className='button' type="button" value="Aguarde..."/>}
          <p>Esqueceu a senha?</p>
        </form>
      </main>
      {error && <p className='error'>{error}</p> }
    </div>
  )
}

export default Login
