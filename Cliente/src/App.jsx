//split: separar el array en array dividiendolo cada vez que este el valor que asigne
//join: volver la palabra un string

import { useState } from 'react';
import './App.css';

function SopaLetras() {
  const matrix = [`N,D,E,K,I,C,A,N,G,U,R,O,G,E
S,X,R,Y,K,V,I,I,Q,G,W,Q,O,D
J,A,G,U,A,R,Z,W,B,N,K,O,U,A
M,L,E,L,E,F,A,N,T,E,H,O,G,W
L,O,B,O,N,U,T,R,I,A,O,U,S,U
W,W,O,S,O,G,A,T,O,V,R,T,M,O
H,L,Z,N,C,T,Y,Z,E,O,X,A,U,R
C,E,C,Y,T,I,B,U,R,O,N,S,R,O
C,O,N,E,J,O,Y,U,S,M,R,S,H,T
Y,N,I,F,E,F,P,T,E,Z,O,O,S,F
O,S,S,E,R,P,I,E,N,T,E,F,L,G
P,P,V,D,D,X,U,F,A,L,C,O,N,Y
M,O,N,O,C,U,Q,W,M,A,N,A,T,I
N,N,X,H,E,B,P,M,U,P,E,R,R,O`];
const listaDePalabras = 'FEFIN, LEO, MANATI, PERRO, GATO, CONEJO, TIBURON, ELEFANTE, ALCON, SERPIENTE, JAGUAR, CANGURO, LOBO, MONO, NUTRIA, LEON, LORO, TORO, ORUGA'

  const [matriz, setMatriz] = useState(matrix);
  const [palabras, setPalabras] = useState(listaDePalabras);
  const [encontradas, setEncontradas] = useState([]);
  const [noEncontradas, setNoEncontradas] = useState([]);

  // Convertir la matriz en formato bidimensional
  const convertirMatriz = (input) => {
    return input[0].split('\n').map(fila => fila.split(','));
  };

  // Buscar palabra horizontalmente
  const buscarHorizontal = (matrizBidimensional, palabra) => {
    const palabraStr = palabra.join(""); // Convertimos la palabra a string
    const palabraStrRev = [...palabra].reverse().join(""); // Invertimos sin modificar el original
    for (let r = 0; r < matrizBidimensional.length; r++) {
      const filaStr = matrizBidimensional[r].join(""); // Convertimos la fila a string
      if (filaStr.includes(palabraStr) || filaStr.includes(palabraStrRev)) {
        return true; // Palabra encontrada
      }
    }
    return false; // Palabra no encontrada
  };

  // Función principal para buscar palabras
  const buscarPalabra = () => {
    const matrizBidi = convertirMatriz(matriz);
    const listaPalabras = palabras.split(',').map(p => p.trim().split(""));
    const encontradasTemp = [];
    const noEncontradasTemp = [];

    listaPalabras.forEach(palabra => {
      if (buscarHorizontal(matrizBidi, palabra)) {
        encontradasTemp.push(palabra.join(""));
      } else {
        noEncontradasTemp.push(palabra.join(""));
      }
    });
    setEncontradas(encontradasTemp);
    setNoEncontradas(noEncontradasTemp);
  };

  return (
    <div>
      <h1>SOPA DE LETRAS</h1>
      <div id="SopaLetras">
        <section className="izquierda">
          <div>
            <h3>Ingresa tu matriz separada por comas (,)</h3>
            <textarea
              name="matriz"
              rows="14"
              cols="27"
              value={matriz}
              onChange={(e) => setMatriz([e.target.value])}
            />
          </div>
          <div>
            <h3>Listado de Palabras a Buscar, separadas por coma (,)</h3><br />
            <textarea
              type="text"
              rows="6"
              cols="60"
              value={palabras}
              onChange={(e) => setPalabras(e.target.value)}
            />
          </div>
          <button onClick={buscarPalabra}>Revisar Palabras Encontradas</button>
        </section>
        <section className="derecha">
          <div>
            <strong>Palabras Encontradas</strong>
            <p>{encontradas.join(", ")}</p>
          </div>
          <div>
            <strong>Palabras No Encontradas</strong>
            <p>{noEncontradas.join(", ")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SopaLetras;
