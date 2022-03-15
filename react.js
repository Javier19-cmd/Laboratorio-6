//Grid del juego.
const SCREEN_SIZE = 800;
const ELEMENT_SIZE = 100;

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

//Método para las propiedades del enemigo.
//En este método se recibe la posición en x del enemigo.
const Card = ({ x, y }) => {

    //Css del jugador.
    const style = {
        width: `${ELEMENT_SIZE}px`, //Ancho del enemigo.
        height: `${ELEMENT_SIZE}px`, //Alto del enemigo.
        background: 'blue', //Color del enemigo.
        position: 'absolute',
        left: `${x}px`, //El padre dice donde está el enemigo.
        Top: `${y}px` //El enemigo está hasta arriba.
    }

    //Retorno del estilo.
    return (
      <div style = { style }/>
    )
}

//Matriz de las cartas.
const defaultCards = [{
  x: 100,
  y: 100,
}, {
  x: 300,
  y: 100,
}, {
  x: 500,
  y: 100,
}, {
  x: 100,
  y: 200,
}, {
  x: 300,
  y: 200,
}, {
  x: 500,
  y: 200,
}, {
  x: 100,
  y: 300,
}, {
  x: 300,
  y: 300,
}, {
  x: 500,
  y: 300,
}]


//Método app. Este el método principal.
const App = () => {

        const [cards, setCards] = React.useState(defaultCards) //Matriz de las cartas.
      //  const [cards2, setCards2] = React.useState(defaultCards2) //Matriz de las cartas.

        //Estilo de la app.
        const style = {
                width: `${SCREEN_SIZE}px`,
                height: `${SCREEN_SIZE}px`,
                background: 'pink',
                position: 'relative'
            }
            //Se pasa el estilo en el div. Luego se manda al jugador en la posición 100px y se posiciona hasta abajo.
            //El enemigo aparece hasta arriba.
        return (
          <div style = { style }>
           {cards.map((card) => <Card key={`${cards.x}-${cards.y}`} {...card} />)}
          </div>
        )
}
ReactDOM.render(
  <App / > ,
  document.getElementById('root')
)
