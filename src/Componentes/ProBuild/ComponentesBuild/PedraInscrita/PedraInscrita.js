//css
import './PedraInscrita.css'

//componentes
import PedraCentro from './PedraCentro/PedraCentro'
import PedraNormal from './PedraNormal/PedraNormal'
import Runas from './Runas/Runas'

//icons
import { RiLoopLeftFill } from "react-icons/ri";

//Hooks
import { useState, useEffect } from 'react'

//context
import { useAuthValue } from '../../../../context/AuthContext'

const PedraInscrita = () => {
  //variaveis do formulario
  const [nomePedra, setNomePedra] = useState('')
  const [classes, setClasses] = useState('')
  const [descricaoPedra, setDescricao] = useState('')

  //useState do context
  const { soma, setSoma } = useAuthValue();

  //variaveis das pedras

  //linha1
  const [linha1A, setLinha1A] = useState(1)

  //linha2
  const [linha2A, setLinha2A] = useState(0)
  const [linha2B, setLinha2B] = useState(0)
  const [linha2C, setLinha2C] = useState(0)

  //linha3
  const [linha3A, setLinha3A] = useState(0)
  const [linha3B, setLinha3B] = useState(0)
  const [linha3C, setLinha3C] = useState(0)
  const [linha3D, setLinha3D] = useState(0)
  const [linha3E, setLinha3E] = useState(0)

  //linha4
  const [linha4A, setLinha4A] = useState(0)
  const [linha4B, setLinha4B] = useState(0)
  const [linha4C, setLinha4C] = useState(0)
  const [linha4D, setLinha4D] = useState(0)
  const [linha4E, setLinha4E] = useState(0)

  //linha5
  const [linha5A, setLinha5A] = useState(0)
  const [linha5B, setLinha5B] = useState(0)
  const [linha5C, setLinha5C] = useState(0)

  //linha6
  const [linha6A, setLinha6A] = useState(0)
  const [linha6B, setLinha6B] = useState(0)
  const [linha6C, setLinha6C] = useState(0)
  const [linha6D, setLinha6D] = useState(0)
  const [linha6E, setLinha6E] = useState(0)
  const [linha6F, setLinha6F] = useState(0)

  //linha7
  const [linha7A, setLinha7A] = useState(0)
  const [linha7B, setLinha7B] = useState(0)
  const [linha7C, setLinha7C] = useState(0)
  const [linha7D, setLinha7D] = useState(0)
  const [linha7E, setLinha7E] = useState(0)

  //linha8
  const [linha8A, setLinha8A] = useState(0)
  const [linha8B, setLinha8B] = useState(0)
  const [linha8C, setLinha8C] = useState(0)
  const [linha8D, setLinha8D] = useState(0)
  const [linha8E, setLinha8E] = useState(0)

  //linha9
  const [linha9A, setLinha9A] = useState(0)
  const [linha9B, setLinha9B] = useState(0)
  const [linha9C, setLinha9C] = useState(0)

  //linha10
  const [linha10A, setLinha10A] = useState(0)
  const [linha10B, setLinha10B] = useState(0)
  const [linha10C, setLinha10C] = useState(0)
  const [linha10D, setLinha10D] = useState(0)
  //linha11
  const [linha11A, setLinha11A] = useState(0)
  const [linha11B, setLinha11B] = useState(0)
  const [linha11C, setLinha11C] = useState(0)
  const [linha11D, setLinha11D] = useState(0)

  //linha12
  const [linha12A, setLinha12A] = useState(0)
  const [linha12B, setLinha12B] = useState(0)
  const [linha12C, setLinha12C] = useState(0)
  const [linha12D, setLinha12D] = useState(0)
  const [linha12E, setLinha12E] = useState(0)

  //linha13
  const [linha13A, setLinha13A] = useState(0)
  const [linha13B, setLinha13B] = useState(0)
  const [linha13C, setLinha13C] = useState(0)
  const [linha13D, setLinha13D] = useState(0)
  const [linha13E, setLinha13E] = useState(0)

  //linha14
  const [linha14A, setLinha14A] = useState(0)
  const [linha14B, setLinha14B] = useState(0)
  const [linha14C, setLinha14C] = useState(0)
  const [linha14D, setLinha14D] = useState(0)
  const [linha14E, setLinha14E] = useState(0)
  const [linha14F, setLinha14F] = useState(0)
  const [linha14G, setLinha14G] = useState(0)

  //linha15
  const [linha15A, setLinha15A] = useState(0)
  const [linha15B, setLinha15B] = useState(0)
  const [linha15C, setLinha15C] = useState(0)
 
  useEffect(() => {
    const totalSoma = linha2A + linha2B + linha2C +
      linha3A + linha3B + linha3C + linha3D + linha3E +
      linha4A + linha4B + linha4D + linha4E
      + linha5B +
      linha6A + linha6B + linha6C + linha6D + linha6E + linha6F +
      linha7A + linha7B + linha7C + linha7D + linha7E +
      linha8A + linha8B + linha8D + linha8E +
      linha9A + linha9B + linha9C +
      linha10A + linha10B + linha10C + linha10D +
      linha11A + linha11B + linha11C + linha11D +
      linha12A + linha12B + linha12C + linha12D + linha12E +
      linha13A + linha13B + linha13C + linha13D + linha13E +
      linha14A + linha14B + linha14C + linha14D + linha14E + linha14F + linha14G +
      linha15A + linha15C;

    setSoma(totalSoma);
  }, [
    linha1A, linha2A, linha2B, linha2C,
    linha3A, linha3B, linha3C, linha3D, linha3E,
    linha4A, linha4B, linha4C, linha4D, linha4E,
    linha5A, linha5B, linha5C,
    linha6A, linha6B, linha6C, linha6D, linha6E, linha6F,
    linha7A, linha7B, linha7C, linha7D, linha7E,
    linha8A, linha8B, linha8C, linha8D, linha8E,
    linha9A, linha9B, linha9C,
    linha10A, linha10B, linha10C, linha10D,
    linha11A, linha11B, linha11C, linha11D,
    linha12A, linha12B, linha12C, linha12D, linha12E,
    linha13A, linha13B, linha13C, linha13D, linha13E,
    linha14A, linha14B, linha14C, linha14D, linha14E, linha14F, linha14G,
    linha15A, linha15B, linha15C,
  ])
  return (
    <div className='container'>
      <main className='container-main-pedra'>
        <section className='section-pai'>
          <div id='zerar-states'>
          <div title='Zerar Todos os Pontos.' className='icon'><RiLoopLeftFill/></div>
            <div className='limitacao'>
              <p>{soma}</p>
              <p>/</p>
              <p>100</p>
            </div>
           
          </div>
        <section className='section-pedra'>
          <div className='linha15'>
            <PedraNormal state={linha15A} setState={setLinha15A} pedraAnterior1={linha14A} pedraAnterior2={linha14B} pedraAnterior3={0} />
            <PedraCentro qtdMax={3} state={linha15B} setState={setLinha15B} pedra1={linha12B} pedra2={linha12C} pedra3={linha12D} pedra4={linha13B} pedra5={linha13C} pedra6={linha13D} pedra7={linha14C} pedra8={linha14D} pedra9={linha14E} />
            <PedraNormal state={linha15C} setState={setLinha15C} pedraAnterior1={0} pedraAnterior2={linha14F} pedraAnterior3={linha14G} />
          </div>
          <div className='linha-padrao'>
            <section className='container-linha14'>
              <PedraNormal state={linha14A} setState={setLinha14A} pedraAnterior1={linha13A} pedraAnterior2={0} pedraAnterior3={0} />
              <PedraNormal state={linha14B} setState={setLinha14B} pedraAnterior1={linha13A} pedraAnterior2={0} pedraAnterior3={linha13B} />
              <PedraNormal state={linha14C} setState={setLinha14C} pedraAnterior1={0} pedraAnterior2={linha13B} pedraAnterior3={linha13C} />
              <PedraNormal state={linha14D} setState={setLinha14D} pedraAnterior1={linha13B} pedraAnterior2={linha13C} pedraAnterior3={linha13D} />
              <PedraNormal state={linha14E} setState={setLinha14E} pedraAnterior1={linha13C} pedraAnterior2={linha13D} pedraAnterior3={0} />
              <PedraNormal state={linha14F} setState={setLinha14F} pedraAnterior1={linha13D} pedraAnterior2={0} pedraAnterior3={linha13E} />
              <PedraNormal state={linha14G} setState={setLinha14G} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha13E} />
            </section>
          </div>
          <div className='linha-padrao'>
            <section className='container-linha13'>
              <PedraNormal state={linha13A} setState={setLinha13A} pedraAnterior1={linha12A} pedraAnterior2={0} pedraAnterior3={0} />
              <Runas />
              <PedraNormal state={linha13B} setState={setLinha13B} pedraAnterior1={linha12B} pedraAnterior2={linha12C} pedraAnterior3={0} />
              <PedraNormal state={linha13C} setState={setLinha13C} pedraAnterior1={linha12B} pedraAnterior2={linha12C} pedraAnterior3={linha12D} />
              <PedraNormal state={linha13D} setState={setLinha13D} pedraAnterior1={linha12C} pedraAnterior2={linha12D} pedraAnterior3={0} />
              <Runas />
              <PedraNormal state={linha13E} setState={setLinha13E} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha12E} />
            </section>
          </div>
          <div className='linha12'>
            <PedraNormal state={linha12A} setState={setLinha12A} pedraAnterior1={linha11A} pedraAnterior2={linha11B} pedraAnterior3={0} />
            <section className='container-linha12'>
              <PedraNormal state={linha12B} setState={setLinha12B} pedraAnterior1={linha11B} pedraAnterior2={linha10B} pedraAnterior3={0} />
              <PedraNormal state={linha12C} setState={setLinha12C} pedraAnterior1={linha11B} pedraAnterior2={0} pedraAnterior3={linha10C} />
              <PedraNormal state={linha12D} setState={setLinha12D} pedraAnterior1={linha10C} pedraAnterior2={linha11C} pedraAnterior3={0} />
            </section>
            <PedraNormal state={linha12E} setState={setLinha12E} pedraAnterior1={linha11C} pedraAnterior2={linha11D} pedraAnterior3={0} />
          </div>
          <div className='linha11'>
            <section className='container1-linha11'>
              <PedraNormal state={linha11A} setState={setLinha11A} pedraAnterior1={linha10A} pedraAnterior2={0} pedraAnterior3={0} />
              <PedraNormal state={linha11B} setState={setLinha11B} pedraAnterior1={linha10A} pedraAnterior2={0} pedraAnterior3={linha10B} />
            </section>

            <Runas />
            <section className='container2-linha11'>
              <PedraNormal state={linha11C} setState={setLinha11C} pedraAnterior1={linha10C} pedraAnterior2={0} pedraAnterior3={linha10D} />
              <PedraNormal state={linha11D} setState={setLinha11D} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha10D} />
            </section>
          </div>
          <div className='linha10'>
            <PedraNormal state={linha10A} setState={setLinha10A} pedraAnterior1={linha9A} pedraAnterior2={0} pedraAnterior3={0} />
            <PedraNormal state={linha10B} setState={setLinha10B} pedraAnterior1={linha9A} pedraAnterior2={0} pedraAnterior3={linha9B} />
            <PedraNormal state={linha10C} setState={setLinha10C} pedraAnterior1={linha9B} pedraAnterior2={0} pedraAnterior3={linha9C} />
            <PedraNormal state={linha10D} setState={setLinha10D} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha9C} />
          </div>
          <div className='linha9'>
            <PedraNormal state={linha9A} setState={setLinha9A} pedraAnterior1={linha8A} pedraAnterior2={0} pedraAnterior3={linha8B} />
            <PedraNormal state={linha9B} setState={setLinha9B} pedraAnterior1={linha8B} pedraAnterior2={0} pedraAnterior3={linha8D} />
            <PedraNormal state={linha9C} setState={setLinha9C} pedraAnterior1={linha8D} pedraAnterior2={0} pedraAnterior3={linha8E} />
          </div>
          <div className='linha8 linha-padrao'>
            <PedraNormal state={linha8A} setState={setLinha8A} pedraAnterior1={linha7A} pedraAnterior2={0} pedraAnterior3={0} />
            <section className='container-linha8'>
              <PedraNormal state={linha8B} setState={setLinha8B} pedraAnterior1={linha7A} pedraAnterior2={linha7B} pedraAnterior3={linha7C} />
              <PedraCentro qtdMax={3} state={linha8C} setState={setLinha8C} pedra1={linha5B} pedra2={linha6C} pedra3={linha6D} pedra4={linha7B} pedra5={linha7C} pedra6={linha7D} pedra7={linha8B} pedra8={linha8D} pedra9={linha9B} />
              <PedraNormal state={linha8D} setState={setLinha8D} pedraAnterior1={linha7C} pedraAnterior2={linha7D} pedraAnterior3={linha7E} />
            </section>
            <PedraNormal state={linha8E} setState={setLinha8E} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha7E} />
          </div>
          <div className='linha7'>
            <PedraNormal state={linha7A} setState={setLinha7A} pedraAnterior1={linha6A} pedraAnterior2={linha6B} pedraAnterior3={linha6C} />
            <PedraNormal state={linha7B} setState={setLinha7B} pedraAnterior1={linha6B} pedraAnterior2={linha6C} pedraAnterior3={0} />
            <PedraNormal state={linha7C} setState={setLinha7C} pedraAnterior1={linha6C} pedraAnterior2={0} pedraAnterior3={linha6D} />
            <PedraNormal state={linha7D} setState={setLinha7D} pedraAnterior1={linha6D} pedraAnterior2={linha6E} pedraAnterior3={0} />
            <PedraNormal state={linha7E} setState={setLinha7E} pedraAnterior1={linha6D} pedraAnterior2={linha6E} pedraAnterior3={linha6F} />
          </div>
          <div className='linha6'>
            <section className='container1-linha6'>
              <PedraNormal state={linha6A} setState={setLinha6A} pedraAnterior1={linha4A} pedraAnterior2={0} pedraAnterior3={linha4B} />
              <PedraNormal state={linha6B} setState={setLinha6B} pedraAnterior1={linha4A} pedraAnterior2={0} pedraAnterior3={linha4B} />
              <PedraNormal state={linha6C} setState={setLinha6C} pedraAnterior1={linha4A} pedraAnterior2={linha5B} pedraAnterior3={linha4B} />
            </section>
            <section className='container2-linha6'>
              <PedraNormal state={linha6D} setState={setLinha6D} pedraAnterior1={linha4D} pedraAnterior2={0} pedraAnterior3={linha4E} />
              <PedraNormal state={linha6E} setState={setLinha6E} pedraAnterior1={linha4D} pedraAnterior2={0} pedraAnterior3={linha4E} />
              <PedraNormal state={linha6F} setState={setLinha6F} pedraAnterior1={linha4D} pedraAnterior2={0} pedraAnterior3={linha4E} />
            </section>
          </div>
          <div className='linha5'>
            <Runas />
            <PedraNormal state={linha5B} setState={setLinha5B} pedraAnterior1={0} pedraAnterior2={linha4B} pedraAnterior3={linha4D} />
            <Runas />
          </div>
          <div className='linha4'>
            <PedraNormal state={linha4A} setState={setLinha4A} pedraAnterior1={linha3A} pedraAnterior2={0} pedraAnterior3={0} />
            <section className='container-linha4'>
              <PedraNormal state={linha4B} setState={setLinha4B} pedraAnterior1={linha3A} pedraAnterior2={linha3B} pedraAnterior3={linha3C} />
              <PedraCentro qtdMax={3} state={linha4C} setState={setLinha4C} pedra1={linha2A} pedra2={linha2B} pedra3={linha2C} pedra4={linha3B} pedra5={linha3C} pedra6={linha3D} pedra7={linha4B} pedra8={linha4D} pedra9={linha5B} />
              <PedraNormal state={linha4D} setState={setLinha4D} pedraAnterior1={linha3C} pedraAnterior2={linha3D} pedraAnterior3={linha3E} />
            </section>
            <PedraNormal state={linha4E} setState={setLinha4E} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha3E} />
          </div>
          <section className='linha-padrao'>
            <PedraNormal state={linha3A} setState={setLinha3A} pedraAnterior1={linha2A} pedraAnterior2={0} pedraAnterior3={0} />
            <PedraNormal state={linha3B} setState={setLinha3B} pedraAnterior1={linha2A} pedraAnterior2={linha2B} pedraAnterior3={0} />
            <PedraNormal state={linha3C} setState={setLinha3C} pedraAnterior1={linha2A} pedraAnterior2={linha2B} pedraAnterior3={linha2C} />
            <PedraNormal state={linha3D} setState={setLinha3D} pedraAnterior1={0} pedraAnterior2={linha2B} pedraAnterior3={linha2C} />
            <PedraNormal state={linha3E} setState={setLinha3E} pedraAnterior1={0} pedraAnterior2={0} pedraAnterior3={linha2C} />
          </section>
          <div className='linha-padrao'>
            <PedraNormal state={linha2A} setState={setLinha2A} /><PedraNormal state={linha2B} setState={setLinha2B} /> <PedraNormal state={linha2C} setState={setLinha2C} />
          </div>
          <div className='linha-padrao'>
            <PedraCentro state={linha1A} setState={setLinha1A} qtdMax={1} pedra1={1} pedra2={1} pedra3={1} pedra4={1} pedra5={1} pedra6={1} pedra7={1} pedra8={1} pedra9={1} />
          </div>
        </section>
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
