function Game (props) {
    const number = 20;
    return (
        <div>
            <h1>Title : {props.name}</h1>
            <img srcSet={props.background_image} alt={props.name} />
            <p>Date created : {props.released}</p>
            <p>Genre : {props.genre.slug}</p>
        </div>
    )
}

export default Game;