import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Game from "./Game";



function GameList () {
    const [games, setGames] = useState([""]);
    const [maxRating, setMaxRating] = useState(false);

    useEffect (() => {
        axios
        .get("https://apis.wilders.dev/wild-games/games")
        .then((reponse) => reponse.data)
        .then((data) => setGames(data));
    }, []);

    function handleClick (){
        setMaxRating(!maxRating)
    }

    return (
        <div>
            <button onClick={handleClick}>
            Show only failed results: 
            </button>
                {games && games
                .filter((game) => !maxRating || game.rating > 4.5)
                .map(game => (
                <Game 
                    key={game.id} game={game} />
                ))
                }
        </div>
    )
}


export default GameList;