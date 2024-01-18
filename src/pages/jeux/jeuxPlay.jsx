import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom"
import { game, gameDefault } from "../../data/game";
import './jeuxPlay.css'
import Error from "../error/error";

function JeuxPlay() {

    const { id } = useParams();

    const [gameSelect, setGameSelect] = useState(gameDefault);

    //Boucle pour récupérer les infos du jeu sélectionné
    useEffect(() => {
        game.forEach((game) => {
            if (game.id === id) {
                setGameSelect(game);
            }
        })
    }, [id, gameSelect])

    return (
        //Vérifie si le useEffect a trouvé un jeu ou pas. Sinon il redirige vers la page /error.
        <>
            {gameSelect != gameDefault ? (
                <div className="blockJeu">
                    <div className="zoneJeu">

                    </div>

                    <div className="zoneInfo">
                        <div className="resumeJeu">
                            <h1>{gameSelect.name}</h1>
                            <p className="descJeu">{gameSelect.description}</p>
                            <ul className="catJeu">
                                <span>Catégorie: </span>
                                {gameSelect.categorie.map((cat) => (
                                    cat === 'Toutes' ? null : <li key={cat}>{cat}</li>
                                ))}
                            </ul>
                        </div>

                        
                        <div className="blockSocial">

                        </div>
                    </div>
                </div>
            ) : (<Error />) }
        </>
    )
}

export default JeuxPlay