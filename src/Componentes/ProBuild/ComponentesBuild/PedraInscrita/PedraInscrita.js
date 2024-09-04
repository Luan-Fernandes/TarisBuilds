//css
import './PedraInscrita.css'

//componentes
import PedraCentro from './PedraCentro/PedraCentro'
import PedraNormal from './PedraNormal/PedraNormal'
import Runas from './Runas/Runas'

//Hooks
import { useState, useEffect } from 'react'

const PedraInscrita = () => {
  //variaveis do formulario
  const [nomePedra, setNomePedra] = useState('')
  const [classes, setClasses] = useState('')
  const [descricaoPedra, setDescricao] = useState('')

  //variaveis das pedras

  //linha1
  const [linha1A, setLinha1A] = useState(0)

  //linha2
  const [linha2A, setLinha2A] = useState(0)
  const [linha2B, setLinha2B] = useState()
  const [linha2C, setLinha2C] = useState()

  //linha3
  const [linha3A, setLinha3A] = useState()
  const [linha3B, setLinha3B] = useState()
  const [linha3C, setLinha3C] = useState()
  const [linha3D, setLinha3D] = useState()
  const [linha3E, setLinha3E] = useState()

  //linha4
  const [linha4A, setLinha4A] = useState()
  const [linha4B, setLinha4B] = useState()
  const [linha4C, setLinha4C] = useState()
  const [linha4D, setLinha4D] = useState()
  const [linha4E, setLinha4E] = useState()

  //linha5
  const [linha5A, setLinha5A] = useState()
  const [linha5B, setLinha5B] = useState()
  const [linha5C, setLinha5C] = useState()

  //linha6
  const [linha6A, setLinha6A] = useState()
  const [linha6B, setLinha6B] = useState()
  const [linha6C, setLinha6C] = useState()
  const [linha6D, setLinha6D] = useState()
  const [linha6E, setLinha6E] = useState()
  const [linha6F, setLinha6F] = useState()

  //linha7
  const [linha7A, setLinha7A] = useState()
  const [linha7B, setLinha7B] = useState()
  const [linha7C, setLinha7C] = useState()
  const [linha7D, setLinha7D] = useState()
  const [linha7E, setLinha7E] = useState()

  //linha8
  const [linha8A, setLinha8A] = useState()
  const [linha8B, setLinha8B] = useState()
  const [linha8C, setLinha8C] = useState()
  const [linha8D, setLinha8D] = useState()
  const [linha8E, setLinha8E] = useState()

  //linha9
  const [linha9A, setLinha9A] = useState()
  const [linha9B, setLinha9B] = useState()
  const [linha9C, setLinha9C] = useState()

  //linha10
  const [linha10A, setLinha10A] = useState()
  const [linha10B, setLinha10B] = useState()
  const [linha10C, setLinha10C] = useState()
  const [linha10D, setLinha10D] = useState()

  //linha11
  const [linha11A, setLinha11A] = useState()
  const [linha11B, setLinha11B] = useState()
  const [linha11C, setLinha11C] = useState()
  const [linha11D, setLinha11D] = useState()

  //linha12
  const [linha12A, setLinha12A] = useState()
  const [linha12B, setLinha12B] = useState()
  const [linha12C, setLinha12C] = useState()
  const [linha12D, setLinha12D] = useState()
  const [linha12E, setLinha12E] = useState()

  //linha13
  const [linha13A, setLinha13A] = useState()
  const [linha13B, setLinha13B] = useState()
  const [linha13C, setLinha13C] = useState()
  const [linha13D, setLinha13D] = useState()
  const [linha13E, setLinha13E] = useState()

  //linha14
  const [linha14A, setLinha14A] = useState()
  const [linha14B, setLinha14B] = useState()
  const [linha14C, setLinha14C] = useState()
  const [linha14D, setLinha14D] = useState()
  const [linha14E, setLinha14E] = useState()
  const [linha14F, setLinha14F] = useState()
  const [linha14G, setLinha14G] = useState()

  //linha15
  const [linha15A, setLinha15A] = useState()
  const [linha15B, setLinha15B] = useState()
  const [linha15C, setLinha15C] = useState()
  
  return (
    <div className='container'>
      <main className='container-main-pedra'>
        <section className='section-pedra'>
          <div className='linha15'>
            <PedraNormal /><PedraCentro /><PedraNormal />
          </div>
          <div className='linha-padrao'>
            <section className='container-linha14'>
              <PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal />
            </section>
          </div>
          <div className='linha-padrao'>
            <section className='container-linha13'>
              <PedraNormal /><Runas /><PedraNormal /><PedraNormal /><PedraNormal /><Runas /><PedraNormal />
            </section>
          </div>
          <div className='linha12'>
            <PedraNormal />
            <section className='container-linha12'><PedraNormal /><PedraNormal /><PedraNormal /></section>
            <PedraNormal />
          </div>
          <div className='linha11'>
            <section className='container1-linha11'><PedraNormal /><PedraNormal /></section>
            <Runas />
            <section className='container2-linha11'><PedraNormal /><PedraNormal /></section>
          </div>
          <div className='linha10'>
            <PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal />
          </div>
          <div className='linha9'>
            <PedraNormal /><PedraNormal /><PedraNormal />
          </div>
          <div className='linha8 linha-padrao'>
            <PedraNormal />
            <section className='container-linha8'><PedraNormal /><PedraCentro /><PedraNormal /></section>
            <PedraNormal />
          </div>
          <div className='linha7'>
            <PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal /><PedraNormal />
          </div>
          <div className='linha6'>
            <section className='container1-linha6'><PedraNormal /><PedraNormal /><PedraNormal /></section>
            <section className='container2-linha6'><PedraNormal /><PedraNormal /><PedraNormal /></section>
          </div>
          <div className='linha5'>
            <Runas /><PedraNormal /><Runas />
          </div>
          <div className='linha4'>
            <PedraNormal />
            <section className='container-linha4'><PedraNormal /><PedraCentro /><PedraNormal /></section>
            <PedraNormal />
          </div>
          <section className='linha-padrao'>
            <PedraNormal /><PedraNormal /> <PedraNormal /><PedraNormal /><PedraNormal />
          </section>
          <div className='linha-padrao'>
            <PedraNormal  state={linha2A} setState={setLinha2A} /><PedraNormal /> <PedraNormal />
          </div>
          <div className='linha-padrao'>
            <PedraCentro />
          </div>
        </section>

        <section className='section-desc'>
          <div className='div-desc'>
            <h1 className='h1-padrao'>Criar Pedra Inscrita</h1>

            <form className='form-build'>

              <label className='label-padrao'>
                <p className='nome-padrao'>Nome da Pedra:</p>
                <input className='input-padrao' maxLength='20' type="text" placeholder='EXP.:DPS Bruto' />
              </label>

              <label className='label-padrao'>
                <p className='nome-padrao'>Classe:</p>
                <select className='input-padrao'>
                  <option value="">*SELECIONE UMA CLASSE*</option>
                  <option value="Barbaro Congelado">Bárbaro-Congelado</option>
                  <option value="Barbaro Trovão">Bárbaro-Trovão</option>
                  <option value="Arqueira Fera Domada">Arqueira-Fera Domada</option>
                  <option value="Arqueira Caçadora">Arqueira-Caçadora</option>
                  <option value="Arqueira Fera Domada"><option value="Paladino-Justiça"></option>Paladino-Justiça</option>
                  <option value="Paladino Guarda">Paladino-Guarda</option>
                  <option value="Guerreiro Ira">Guerreiro-Ira</option>
                  <option value="Gerreiro Escudo de guerre">Gerreiro-Escudo de guerre</option>
                  <option value="Necromante Roubo de almas">Necromante-Roubo de almas</option>
                  <option value="Necromante Cure a alma">Necromante-Cure a alma</option>
                  <option value="Espadachin Enganar">Espadachin-Enganar</option>
                  <option value="Espadachin Duelista">Espadachin-Duelista</option>
                  <option value="Mago Gelo">Mago-Gelo</option>
                  <option value="Mago Fogo">Mago-Fogo</option>
                  <option value="Sacerdote Fe">Sacerdote-Fé</option>
                  <option value="Sacerdote Orar">Sacerdote-Orar</option>
                  <option value="Bardo Solo">Bardo-Solo</option>
                  <option value="Bardo Harmonia">Bardo-Harmonia</option>

                </select>
              </label>
              <label className='label-padrao'>
                <p className='nome-padrao'>Descrição da Build:</p>
                <textarea placeholder='EXP.:Minha Buid Funciona...' className='textarea'></textarea>
              </label>
              <button className='button-pedra'>Criar Pedra</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PedraInscrita
