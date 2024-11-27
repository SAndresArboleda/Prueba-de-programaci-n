# Prueba de Programación (sopa de letras)


<!-- Logo -->
<p align="center">
    <img width="180" src= "Cliente\public\Clanand3.JPG" >
</p>

<!-- Links Recursos Usados -->
<div align="center">
    <a href="https://github.com/SAndresArboleda?tab=repositories">
        <img width="110" src= "https://img.shields.io/github/followers/SAndresArboleda" >
    </a>
    <img width="65" src= "https://img.shields.io/badge/Javascrip-yellow" >
    <img width="93" src= "https://img.shields.io/badge/React 18.2.0-blue" >
    <img width="48" src= "https://img.shields.io/badge/HTML-red" >
    <img width="40" src= "https://img.shields.io/badge/CSS-darkblue" >
</div>

<br>
<div></div>
<br>
<br>

# Guia
### Recursos Especiales
 * No se Utilizaron recursos especiales

### Tecnologías Utilizadas
 * JavaScript, React, CSS, HTML, Visual Studio Code, Vite

# Configuración del Proyecto
``` code:
npm install
npm run dev
```

# Para el uso de la Aplicación

 1.	Para el uso de esta aplicación es necesario tener la matriz, es decir la sopa de letras, construida por letras en mayúsculas que estén separadas por coma (,) y con un salto de línea para cada fila de letras.
Ejemplo: 
 ````code:
N,D,E,K,I,C,A,N,G,U,R,O,G,E
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
N,N,X,H,E,B,P,M,U,P,E,R,R,O
 ````

2.	Tener también la lista o palabra a buscar en letra mayúscula y cada palabra separada por coma (,)
Ejemplo:
````code:
RANA, FEFIN, LEO, MANATI, PERRO, GATO, CONEJO, TIBURON, ELEFANTE, ALCON, SERPIENTE, JAGUAR, CANGURO, LOBO, MONO, NUTRIA, LEON, LORO, TORO, ORUGA
````

3.	Ingresar en el primer recuadro la sopa de letras.
4.	Ingresar en el segundo recuadro el listado de palabras a buscar.
5.	Dar click en el botón Buscar Palabras
6.	Al lado derecho de la aplicación se mostrará un listado con las palabras encontradas y otro con las palabras no encontradas.


# Explicación del código

1. Creamos la carpeta Cliente
    * En la terminal del proyecto ctrl + ñ:
        * npm create vite@latest
    * Abrimos la terminal en la carpeta Frontend
        * npm install

2. En el archivo main.jsx, encerramos nuestra funcion SopaLetras de la siguiente manera:
    ````code:
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import SopaLetras from './App.jsx'

    createRoot(document.getElementById('root')).render(
    <StrictMode>
        <SopaLetras />
    </StrictMode>,
    )
    ````
3. En el archivo App.jsx, creamos nuestras Funcion SopaLetras, diseñando el html como lo queremos visualizar:
    ````code:
    import { useState } from 'react';

    const SopaLetras = () {
        const [matriz, setMatriz] = useState(matrix);
        const [palabras, setPalabras] = useState(listaDePalabras);
        const [encontradas, setEncontradas] = useState([]);
        const [noEncontradas, setNoEncontradas] = useState([]);

    ...
    ````
    
### Desarrollo de la funcion
1. Creamos los estados que vamos a necesitar

2. Transformamos nuestra matriz a bidimensional

3. Creamos la funcion buscarHorizontal
    * la funcion trae como parametros la matriz bidimensional y la palabra a buscar
    * reversar las palabra a buscar para encontrar palabras que se lean de derecha a izquierda en la matriz
    * recorremos la matriz bidimensional y pasamos cada fila a un string
    * revisamos en cada fila si contiene la palabra (normal o reversada) a buscar, la funcion debe retornar true o false segun el caso

4. Creamos la funcion buscarPalabra
    * creamos las variables para optener la matriz ya transformada a bidimensional, traer la lista de palabras sin espacios, un contenedor temporal de las palabras encontradas y no encontradas
    * recorremos el listado de palabras con un forEach verificando si la funcion buscarHorizontal, con los parametros matriz trasformada y la palabra sin espacios, da true o false y hacemos push a la variable que corresponda encontrada, o no encontrada.
    * setiamos el estado encontrado y no encontrado con la variable correspondiente

5. Creamos las demas funciones buscarVertical, buscarDiagonal y las ingresamos en nuestra funcion buscarPalabra dentro de la condición.


 