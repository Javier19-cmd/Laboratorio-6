const SCREEN_SIZE = 800
const ELEMENT_SIZE = 100

const Player = ({ x }) => {
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE + 20}px`,
    position: 'absolute',
    left: `${x}px`,
    bottom: '0px',
    backgroundSize: 'cover'
  }

  return (
    <img src='./Ship.gif' style={style} />
  )
}

const Enemy = ({ x, y }) => {
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

const Bullet = ({ x, y }) => {
  const style = {
    width: `${ELEMENT_SIZE}px`,
    height: `${ELEMENT_SIZE}px`,
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`
  }

  return (
    <img src='./Bullet.gif' style={style} />
  )
}

const defaultEnemies = [{
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
  y: 300,
}, {
  x: 300,
  y: 300,
}, {
  x: 500,
  y: 300,
}, {
  x: 100,
  y: 500,
}, {
  x: 300,
  y: 500,
}, {
  x: 500,
  y: 500,
}]

const App = () => {
  const [enemies, setEnemies] = React.useState(defaultEnemies)
  const [playerPos, setPlayerPos] = React.useState(SCREEN_SIZE/2 - ELEMENT_SIZE/2)
  const [bulletPos, setBulletPos] = React.useState(null)

  const frame = React.useCallback(() => {
    setEnemies((oldValue) => (
      oldValue.map(enemy => ({ y: enemy.y, x: (enemy.x + 1) % (SCREEN_SIZE - ELEMENT_SIZE) }))
    ))
    setBulletPos(oldPos => {
      if (oldPos) {
        return { x: oldPos.x, y: oldPos.y - 10 }
      }
    })
    requestAnimationFrame(frame)
  }, [])

  React.useEffect(() => {
    requestAnimationFrame(frame)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      setPlayerPos((oldPos) => ((oldPos + 10) % (SCREEN_SIZE - ELEMENT_SIZE)))
    } else if (e.key === 'ArrowLeft') {
      setPlayerPos((oldPos) => ((oldPos - 10) % (SCREEN_SIZE - ELEMENT_SIZE)))
    } else if (e.key === ' ') {
      setBulletPos({ x: playerPos, y: SCREEN_SIZE - ELEMENT_SIZE })
    }
  }

  const pizza = {
    width: `${SCREEN_SIZE}px`,
    height: `${SCREEN_SIZE}px`,
    background: '#000033',
    position: 'relative'
  }

  return (
    <div style={pizza} onKeyDown={handleKeyDown} tabIndex="0">
      {enemies.map((enemy) => <Enemy key={`${enemy.x}-${enemy.y}`} {...enemy} />)}
      {bulletPos && <Bullet {...bulletPos} />}
      <Player x={playerPos} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
