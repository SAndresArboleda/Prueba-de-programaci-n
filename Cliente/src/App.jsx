import './App.css'
import { useState } from "react";

function SopaLetras() {

  const [matriz, setMatriz] = useState("");
  const [palabras, setPalabras] = useState("");
  const [encontradas, setEncontradas] = useState([]);
  const [noEncontradas, setNoEncontradas] = useState([]);
  const totalPalabras = palabras.split(',').map(pal => pal.trim()).filter(pa => pa.length > 0)

  const convertirMatriz = () => {
    return matriz.split('\n').map(line => line.split(','));
  };

  const buscarHorizontal = (matrizBidemensional, palabra) => {
    const palabraStrRev = [...palabra].reverse().join('')
    for (let f = 0; f < matrizBidemensional.length; f++) {
      const matrizStr = matrizBidemensional[f].join('');
      if (matrizStr.includes(palabra) || matrizStr.includes(palabraStrRev)) {
        return true
      }
    }
    return false
  }

  const buscarVertical = (matrizBidemensional, palabra) => {
    const palabraStrRev = [...palabra].reverse().join('');
    const numFilas = matrizBidemensional.length;
    const numColumnas = matrizBidemensional[0].length;

    for (let c = 0; c < numColumnas; c++) {
      let letrasColumn = "";
      for (let f = 0; f < numFilas; f++) {
        letrasColumn += matrizBidemensional[f][c]
      }
      if (letrasColumn.includes(palabra) || letrasColumn.includes(palabraStrRev)) {
        return true
      }
    }
    return false
  }

  const buscarDiagonal = (matrizBidemensional, palabra) => {
    const palabraStrRev = [...palabra].reverse().join('');
    const numFilas = matrizBidemensional.length;
    const numColumnas = matrizBidemensional[0].length;

    for (let f = 0; f < numFilas; f++) {
      for (let c = 0; c < numColumnas; c++) {
        let letrasDiagonal = ""
        for (let i = 0; f + i < numFilas && c + i < numColumnas; i++) {
          letrasDiagonal += matrizBidemensional[f + i][c + i]
        }
        if (letrasDiagonal.includes(palabra) || letrasDiagonal.includes(palabraStrRev)) {
          return true;
        }
      }
    }
    for (let f = 0; f < numFilas; f++) {
      for (let c = 0; c < numColumnas; c++) {
        let letrasDiag = "";
        for (let i = 0; f + i < numFilas && c - i < numColumnas; i++) {
          letrasDiag += matrizBidemensional[f + i][c - i];
        }
        if (letrasDiag.includes(palabra) | letrasDiag.includes(palabraStrRev)) {
          return true
        }
      }
    }
    return false
  }

  const buscarPalabra = () => {
    const matrizBid = convertirMatriz(matriz)
    const listaPalabras = palabras.split(',').map(pal => pal.trim()).filter(lis => lis.length > 0)
    const encontradasTemp = [];
    const noEncontradasTemp = [];
    listaPalabras.forEach(pala => {
      if (buscarHorizontal(matrizBid, pala) ||
        buscarVertical(matrizBid, pala) ||
        buscarDiagonal(matrizBid, pala)) {
        encontradasTemp.push(pala)
      } else {
        noEncontradasTemp.push(pala)
      }
    })
    setEncontradas(encontradasTemp)
    setNoEncontradas(noEncontradasTemp)
  }

  return (
    <div id='SopaLetras'>
      <h1 className="titulo">SOPA DE LETRAS</h1>
      <div className="contenedor">
        <section className="izquierda">
          <div>
            <h3 className="subtitulo">Ingresa tu matriz de letras en mayúscula y separadas por coma (,) filas separadas por enter</h3>
            <textarea
              rows="16"
              cols="29"
              className="areaTextarea1"
              value={matriz}
              onChange={(e) => setMatriz(e.target.value)}
            />
          </div>
          <div>
            <h3 className="subtitulo">Listado de Palabras a Buscar, en mayúscula y separadas por coma (,)</h3>
            <textarea
              rows="6"
              cols="60"
              className="areaTextarea2"
              value={palabras}
              onChange={(e) => setPalabras(e.target.value)}
            />
          </div>
          <button className="boton" onClick={buscarPalabra}>Buscar Palabras {totalPalabras.length}</button>
        </section>
        <section className="derecha">
          <div className="resultado1">
            <strong>Palabras Encontradas {encontradas.length}</strong>
            <p>{encontradas.join(', ')}</p>
          </div>
          <div className="resultado2">
            <strong>Palabras No Encontradas {noEncontradas.length}</strong>
            <p>{noEncontradas.join(', ')}</p>
          </div>
          <iframe
            src="/GuiaUsuario.pdf"
            width="100%"
            height="250px"
            title="Guía de Uso"
          />
        </section>
      </div>
    </div>
  );
}

export default SopaLetras;
