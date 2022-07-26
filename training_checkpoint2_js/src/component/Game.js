function Game ({game}) {

    return (
        <div>
            <h1>Title : {game.name}</h1>
            <img srcSet={game.background_image} alt={game.name} />
            <p>Date created : {game.released}</p>
            
            <p>Note : {game.rating}</p>
        </div>
    )
}

export default Game;