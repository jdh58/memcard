export default function SplashScreen(props) {
  return (
    <>
      <div className="start">
        <h1>{props.isEnd ? 'GAME OVER!' : 'MEMORY GAME'}</h1>
        {props.isEnd ? <h2>Score: {props.score}</h2> : null}
        <button
          onClick={() => {
            props.setGameState('during');
          }}
        >
          {props.isEnd ? 'REPLAY' : 'START'}
        </button>
      </div>
    </>
  );
}
