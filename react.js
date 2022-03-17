//Grid del juego.
const SCREEN_SIZE = 1865;
const SCREEN_HEIGHT = 945;
const ELEMENT_SIZE = 200;

/*
//Método para las propiedades del jugador.
//En este método se recibe la posición en x del jugador.
const Player = ({ x }) => {

    //Css del jugador.
    const style = {
        width: `${ELEMENT_SIZE}px`, //Ancho del jugador.
        height: `${ELEMENT_SIZE}px`, //Alto del jugador.
        background: 'red', //Color del jugador.
        position: 'absolute',
        left: `${x}px`, //El padre dice donde está el jugador.
        bottom: `0px` //El bottom está quemado.
    }

    //Retorno del estilo.
    return ( <div style = { style }/>
    )
}
*/

//Método para las propiedades de las cartas.
//En este método se reciben las posiciones "x" y "y" de las cartas.
const Card = ({ x, y }) => {
  //Estilo de la carta.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`
  }

  return (
    <img src='./uno.png' style={style} />
  )
}

//Fila 1

//Método que se encarga del diseño de la primera carta con número 1.
const N1 = () => {
  const style = {
    //Diseño del número.
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `100px`,
    top: `50px`
  }
  //Retorno de la imagen de la carta.
  return (
    <img src='./1.png' style={style} />
  )
}

//Método que se encarga del diseño de la segunda carta con número 2.
const N2 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `400px`,
    top: `50px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./2.png' style={style} />
  )
}

//Método que se encarga del diseño de la segunda carta con número 3.
const N3 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `700px`,
    top: `50px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./3.png' style={style} />
  )
}

//Método que se encarga del diseño de la segunda carta con número 4.
const N4 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `1000px`,
    top: `50px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./4.png' style={style} />
  )
}

//Fila 2.
//Método que se encarga del diseño de la quinta carta con número 5.
const N5 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `100px`,
    top: `350px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./5.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 1.
const N6 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `400px`,
    top: `350px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./1.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 5.
const N7 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `700px`,
    top: `350px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./5.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 3.
const N8 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `1000px`,
    top: `350px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./3.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 4.
const N9 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `100px`,
    top: `650px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./4.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 8.
const N10 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `400px`,
    top: `650px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./8.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 9.
const N11 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `700px`,
    top: `650px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./9.png' style={style} />
  )
}

//Método que se encarga del diseño de la sexta carta con número 8.
const N12 = () => {
  //Diseño del número.
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `1000px`,
    top: `650px`
  }

  //Retorno de la imagen de la carta.
  return (
    <img src='./8.png' style={style} />
  )
}


//Matriz de la primera fila de cartas.
const fila1 = [{
  x: 100,
  y: 50,
}, {
  x: 400,
  y: 50,
}, {
  x: 700,
  y: 50,
}, {
  x: 1000,
  y: 50,
}]

//Matriz de la segunda fila de cartas.
const fila2 = [{
  x: 100,
  y: 350,
}, {
  x: 400,
  y: 350,
}, {
  x: 700,
  y: 350,
}, {
x: 1000,
y: 350,
}]

//Matriz de la tercera fila de cartas.
const fila3 =[{
  x: 100,
  y: 650,
}, {
  x: 400,
  y: 650,
}, {
  x: 700,
  y: 650,
}, {
x: 1000,
y: 650,
}]




//Método app. Este el método principal.
const App = () => {

  const [cards, setCards] = React.useState(fila1) //Matriz de la primera fila de cartas.
  const [cards2, setCards2] = React.useState(fila2) //Matriz de la segunda fila de cartas.
  const [cards3, setCards3] = React.useState(fila3) //Matriz de la tercera fila de cartas.

  const hola = (e) => {
    if(e.key === 'ArrowRight'){
      setCards((oldPos) => ((oldPos + 10) % (SCREEN_SIZE - ELEMENT_SIZE)))
    }
  }

  //Estilo de la app.
  const style = {
    width: `${SCREEN_SIZE}px`,
    height: `${SCREEN_HEIGHT}px`,
    background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
    position: 'relative'
}

  //Se están mapenado las tres filas de las cartas.
  return (
    <div style = { style }>
     {cards.map((card) => <Card key={`${card.x}-${card.y}`} {...card} />)}
     {cards2.map((car) => <Card key={`${car.x}-${car.y}`} {...car} />)}
     {cards3.map((ca) => <Card key={`${ca.x}-${ca.y}`} {...ca} />)}
     <N1/>
     <N2/>
     <N3/>
     <N4/>
     <N5/>
     <N6/>
     <N7/>
     <N8/>
     <N9/>
     <N10/>
     <N11/>
     <N12/>
     <p>Hola</p>
    </div>
  )
}
//Renderizando al método principal.
ReactDOM.render(
  <App / > ,
  document.getElementById('root')
)
