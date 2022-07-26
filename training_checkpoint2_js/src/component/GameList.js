import React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import Game from "./Game";



function GameList (props) {
    const [games, setGames] = useState([""]);
    const [maxRating, setMaxRating] = useState();

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
            <ul>
                {games && games
                .filter((e) => e.game.rating >= 4.5 ? <Game /> : "" || !setMaxRating)
                }
                .map((game, index) => (
                <li> <Game 
                    game={game}
                    key={index}/>
                ))}
                </li>
            </ul>
        </div>
    )
}


export default GameList;