import React from 'react'

import "./FaleConosco.css"
import { useState } from 'react'

const FaleConosco = () => {

  const [assunto, setAssunto] = useState()
  const [msg, setMsg] = useState()

  const enviarMSG = () => {
    //enviar menssagem
  }

  return (
    <div className='container'>
      <main className='container-main-login'>
        <h1>FALECONOSCO</h1>
        <form className='container-form-login'>
          <label>ASSUNTO:
            <input type="text" name='assunto' value={assunto} onChange={e => setAssunto(e.target.value)}/>
          </label>
          <label>
            MENSSAGEM:
            <textarea name="msg" value={msg} onChange={e => setMsg(e.target.value)}></textarea>
          </label>
          <input onClick={enviarMSG} className='button' type="button" value="ENVIAR"/>
        </form>
        <div>
          <span>INSTAGRAM</span>
          <span>DISCORD</span>
        </div>
      </main>
    </div>
  )
}

export default FaleConosco
