import React from 'react'
import './Cadastro.css'
import { useState,useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Cadastro = () => {

  const [displayName,setDisplayName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [passConfirmeCadastro,setPassConfirmeCadastro] = useState("")
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication();
  
  const cadastrar = async (e) => {
    e.preventDefault(); 

    setError("");

    const user = {
      displayName,
      email,
      password
    }

    if(password != passConfirmeCadastro){
      setError("As senhas precisam ser iguais!")
      return
    }

    if(displayName == ""){
      setError("Digite seu nome!")
      return
    }
    const res = await createUser(user)
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
      <h1>CADASTRO</h1>
        <form className='container-form-login'>
        <label>NOME:
            <input type="text" name='userCadastro' required value={displayName} onChange={e => setDisplayName(e.target.value)} placeholder='Nome de usuario' />
          </label>
          <label>EMAIL:
            <input type="email" name='emai' required value={email} onChange={e => setEmail(e.target.value)} placeholder='EXP:teste@teste.com' />
          </label>
          <label>
            SENHA: 
            <input type="password" name='password' required value={password} onChange={e => setPassword(e.target.value)} placeholder='EXP:123456' />
          </label>
          <label>
            CONFIRME SENHA: 
            <input type="password" name='passConfirmeCadastro' required value={passConfirmeCadastro} onChange={e => setPassConfirmeCadastro(e.target.value)} placeholder='EXP:123456' />
          </label>
          {!loading && <input onClick={cadastrar} className='button' type="button" value="Cadastrar"/> }
          {loading && <input desable className='button' type="button" value="Aguarde..."/>}
        </form>
       
      </main>
      
      {error && <p className='error'>{error}</p> }
    </div>
  )
}

export default Cadastro
