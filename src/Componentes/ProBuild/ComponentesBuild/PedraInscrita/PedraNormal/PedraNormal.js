//hooks
import { useEffect, useState } from 'react';

//css
import './pedraNormal.css';

//Context
import { useAuthValue } from '../../../../../context/AuthContext';

const PedraNormal = ({ state, setState, pedraAnterior1, pedraAnterior2, pedraAnterior3 }) => {
  // chamando o context
  const { soma } = useAuthValue();

  // função simples de incremento
  const pedrasClick = () => {
    
    // Impede o incremento se a soma for 5 ou mais
    if (soma >= 100) return;

    // A função só vai decrementar quando o state atingir o máximo que é o 3.
    const newState = state === 3 ? 0 : state + 1;

    // Esse if impede que as pedras sejam upadas antes das pedras anteriores.
    if (pedraAnterior1 === 0 && pedraAnterior2 === 0 && pedraAnterior3 === 0) {
      setState(0);
    } else {
      setState(newState);
    }
  };

  // esse useEffect vai acompanhar as pedras anteriores para quando elas forem 0 os states tbm zerar para evitar bugs.
  useEffect(() => {
    if (pedraAnterior1 === 0 && pedraAnterior2 === 0 && pedraAnterior3 === 0) {
      setState(0);
    }
  }, [pedraAnterior1, pedraAnterior2, pedraAnterior3, setState]);

  console.log(soma);

  return (
    <div id='container-pedra-normal'>
      <div 
        onClick={pedrasClick} 
        id={pedraAnterior1 === 0 && pedraAnterior2 === 0 && pedraAnterior3 === 0 ? 'container-component-pedra-normal-des' : 'container-component-pedra-normal-act'}
      ></div>
      <div id='pontos-distribuidos-normal'>
        <p>{state}</p>
        <p>/</p>
        <p>3</p>
      </div>
    </div>
  );
};

export default PedraNormal;
