import { useEffect } from 'react'
import './pedraNormal.css'

const PedraNormal = ({state,setState,pedraAnterior1,pedraAnterior2,pedraAnterior3}) => {
  //essa é uma função simples de incremento.
  const pedrasClick = () => {
    //A função so vai decrementar quando o state atingir o maximo que é o 3.
    setState(state === 3 ? 0 : state + 1 )
    //Esse if impede que as pedras sejam upadas antes das pedras anteriores.
    if(pedraAnterior1 === 0 && pedraAnterior2 === 0 && pedraAnterior3 === 0){
      setState(state - state)
    }
  }
  //esse useEffect vai acompanhar as pedras anteriores para quando elas fores 0 os states tbm zerar para evitar bug's.
  useEffect(() => {
    if(pedraAnterior1 === 0 && pedraAnterior2 === 0 && pedraAnterior3 === 0){
      setState(0)
    }
  },[pedraAnterior1,pedraAnterior2,pedraAnterior3])
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
