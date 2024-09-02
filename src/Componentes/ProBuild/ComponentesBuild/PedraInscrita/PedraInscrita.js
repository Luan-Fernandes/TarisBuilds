//css
import './PedraInscrita.css'

//componentes
import PedraCentro from './PedraCentro/PedraCentro'
import PedraNormal from './PedraNormal/PedraNormal'
import Runas from './PedraNormal/Runas/Runas'

const PedraInscrita = () => {
  return (
    <div className='container'>
      <main className='container-main-pedra'>
        <section className='section-pedra'>
        <div className='linha15'>
            <PedraNormal/><PedraCentro/><PedraNormal/>
            </div>
        <div className='linha-padrao'>
        <section className='container-linha14'>
          <PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/>
          </section>
          </div>
          <div className='linha-padrao'>
            <section className='container-linha13'>
          <PedraNormal/><Runas/><PedraNormal/><PedraNormal/><PedraNormal/><Runas/><PedraNormal/>
          </section>
          </div>
          <div className='linha12'>
          <PedraNormal/>
            <section className='container-linha12'><PedraNormal/><PedraNormal/><PedraNormal/></section>
            <PedraNormal/>
          </div>
          <div className='linha11'>
          <section className='container1-linha11'><PedraNormal/><PedraNormal/></section>
            <Runas/>
            <section className='container2-linha11'><PedraNormal/><PedraNormal/></section>
          </div>
          <div className='linha10'>
            <PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/>
          </div>
          <div className='linha9'>
          <PedraNormal/><PedraNormal/><PedraNormal/>
          </div>
          <div className='linha8 linha-padrao'>
          <PedraNormal/>
            <section className='container-linha8'><PedraNormal/><PedraCentro/><PedraNormal/></section>
            <PedraNormal/>
          </div>
          <div className='linha7'>
            <PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/><PedraNormal/>
          </div>
          <div className='linha6'>
            <section className='container1-linha6'><PedraNormal/><PedraNormal/><PedraNormal/></section>
            <section className='container2-linha6'><PedraNormal/><PedraNormal/><PedraNormal/></section>
          </div>
          <div className='linha5'>
              <Runas/><PedraNormal/><Runas/>
          </div>
          <div className='linha4'>
            <PedraNormal/>
            <section className='container-linha4'><PedraNormal/><PedraCentro/><PedraNormal/></section>
            <PedraNormal/>
          </div>
          <section className='linha-padrao'>
          <PedraNormal/><PedraNormal/> <PedraNormal/><PedraNormal/><PedraNormal/>
          </section>
          <div className='linha-padrao'>
            <PedraNormal/><PedraNormal/> <PedraNormal/>
          </div>
          <div className='linha-padrao'>
          <PedraCentro/>
          </div>
        </section>

        <section className='section-desc'>
          <div className='div-desc'>
        <h1>Criar Pedra Inscrita</h1>
        <form>
        <label>
          <p>Nome da Pedra:</p>
          <input type="text" placeholder='EXP:.DPS Bruto'/>
        </label>

        <label>
          <p>Classe:</p>
          <select>
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
        
        </form>
        </div>
        </section>
      </main>
    </div>
  )
}

export default PedraInscrita
