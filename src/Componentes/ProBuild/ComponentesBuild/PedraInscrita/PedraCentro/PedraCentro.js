import './pedraCentro.css'

const PedraCentro = ({ state,stateDeQnt }) => {
  return (
    <div id='container-pedra-centro'>
       <div id='container-component-pedra'></div>
       <div id='pontos-distribuidos'>
        <p>{state}</p>
        <p>/</p>
        <p>{stateDeQnt}</p>
       </div>
    </div>
  )
}

export default PedraCentro
