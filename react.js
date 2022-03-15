//Grid del juego.
const SCREEN_SIZE = 1080;
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
    <img src='./Enemy.gif' style={style} />
  )
}

//Matriz de la primera fila de cartas.
const fila1 = [{
  x: 100,
  y: 100,
}, {
  x: 300,
  y: 100,
}, {
  x: 500,
  y: 100,
}, {
  x: 700,
  y: 100,
}]

//Matriz de la segunda fila de cartas.
const fila2 = [{
    x: 100,
    y: 300,
  }, {
    x: 300,
    y: 300,
  }, {
    x: 500,
    y: 300,
}, {
  x: 700,
  y: 300,
}]

//Matriz de la tercera fila de cartas.
const fila3 =[{
    x: 100,
    y: 500,
  }, {
    x: 300,
    y: 500,
  }, {
    x: 500,
    y: 500,
}, {
  x: 700,
  y: 500,
}]

//Método app. Este el método principal.
const App = () => {

        const [cards, setCards] = React.useState(fila1) //Matriz de la primera fila de cartas.
        const [cards2, setCards2] = React.useState(fila2) //Matriz de la segunda fila de cartas.
        const [cards3, setCards3] = React.useState(fila3) //Matriz de la tercera fila de cartas.

        //Estilo de la app.
        const style = {
                width: `${SCREEN_SIZE}px`,
                height: `${SCREEN_SIZE}px`,
                background: 'pink',
                position: 'relative'
            }
            //Se están mapenado las tres filas de las cartas.
        return (
          <div style = { style }>
           {cards.map((card) => <Card key={`${card.x}-${card.y}`} {...card} />)}
           {cards2.map((car) => <Card key={`${car.x}-${car.y}`} {...car} />)}
           {cards3.map((ca) => <Card key={`${ca.x}-${ca.y}`} {...ca} />)}
          </div>
        )
}
//Renderizando al método principal.
ReactDOM.render(
  <App / > ,
  document.getElementById('root')
)
