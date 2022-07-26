import React from "react";
import {useEffect} from "react";
import axios from "axios";
import Game from "./Game";


function GameList (props) {
    useEffect (() => {
        axios
        .get("/wild-games/games/")
        .then((reponse) => reponse.data)
        .then((data) => {props(data.result)});
    }, [])

    return (
        {props.val && props.val
        .map((val, index) => (
            <Game 
            {...val}
            key={index}/>
        ))}
    )
}

export default GameList;