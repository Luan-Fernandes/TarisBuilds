import './pedraNormal.css'

const PedraNormal = ({state,setState}) => {
  const pedrasClick = () => {
    setState(state === 3 ? 0 : state + 1 )
  }
  return (
    <div id='container-pedra-normal'>
       <div onClick={() => pedrasClick() } id='container-component-pedra-normal'></div>
       <div id='pontos-distribuidos-normal'>
        <p>{state}</p>
        <p>/</p>
        <p>3</p>
       </div>
    </div>  
  )
}

export default PedraNormal
