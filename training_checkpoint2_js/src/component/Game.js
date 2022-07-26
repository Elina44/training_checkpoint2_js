import {Link} from 'react-router-dom';

function Game ({game}) {

    return (
        <Link to={'/games/${game.id}'}>
            <div className="card-game-wrapper">
                <div className="card-game-name">
                    <img srcSet={game.background_image} alt={game.name} />
                </div>

                <div className="content-info">
                    <h1>Title : {game.name}</h1>
                    <p>Date created : {game.released}</p>
                    <p>Note : {game.rating}</p>
                    <p>Genre : </p>
                </div>
            </div>
        </Link>
    )
}

export default Game;