import React from 'react'
import './Home.css'

//rotas
import { useNavigate } from 'react-router-dom'

//plano de fundo
import logo from "../Images/logo.png"

const Home = () => {
  const history = useNavigate();
  return (
    <div className='container'>
      <main className="container-main-home">
      <div>
      <figure ><img src={logo} alt="logo da home" /></figure>
      <p>Crie suas Builds, e navegue pela comunidade do TarisLand. </p>
      </div>
      <button onClick={() => history("/pedrainscrita")} className='buttonHome'>Crie sua Build.</button>
      </main>
    </div>
  )
}

export default Home
