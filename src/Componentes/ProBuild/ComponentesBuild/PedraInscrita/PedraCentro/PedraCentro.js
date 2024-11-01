import { useEffect } from 'react';
import './pedraCentro.css';

const PedraCentro = ({ qtdMax, state, setState, pedra1, pedra2, pedra3, pedra4, pedra5, pedra6, pedra7, pedra8, pedra9 }) => {
  useEffect(() => {
    // Agrupa as pedras em um array
    const pedras = [pedra1, pedra2, pedra3, pedra4, pedra5, pedra6, pedra7, pedra8, pedra9];
  
    // Se houver uma pedra com valor 0, define o estado como 0 e encerra a execução
    if (pedras.includes(0)) {
      setState(0);
      return; // Saída antecipada para evitar continuar a lógica
    }
  
    // Contagem das pedras válidas (1, 2 e 3)
    const counts = pedras.reduce((acc, p) => {
      // Verifica se a pedra está dentro do intervalo desejado
      if (p >= 1 && p <= 3) {
        // Incrementa a contagem da pedra correspondente
        acc[p] = (acc[p] || 0) + 1; // Se não existir, inicializa como 0 e incrementa
      }
      return acc; // Retorna o acumulador atualizado
    }, {});
  
    // Define o estado baseado na contagem
    // Se houver pelo menos uma pedra com valor 1, define o estado como 1
    if (counts[1]) {
      setState(1);
    } 
    // Se não houver pedras com valor 1, mas houver pelo menos uma pedra com valor 2, define o estado como 2
    else if (counts[2]) {
      setState(2);
    } 
    // Se todas as pedras forem 3, define o estado como 3
    else if (counts[3] === 9) {
      setState(3);
    }
  }, [setState, pedra1, pedra2, pedra3, pedra4, pedra5, pedra6, pedra7, pedra8, pedra9]);
  
  return (
    <div id='container-pedra-centro'>
      <div id='container-component-pedra'></div>
      <div id='pontos-distribuidos'>
        <p>{state}</p>
        <p>/</p>
        <p>{qtdMax}</p>
      </div>
    </div>
  );
};

export default PedraCentro;
