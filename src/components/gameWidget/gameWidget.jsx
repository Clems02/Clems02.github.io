import './gameWidget.css'
import { NavLink } from 'react-router-dom';

function GameWidget({game}) {
    const rank = [1, 2, 3, 4, 5];

    let x = 1;

    return (
        <li className="contentItem">
            <NavLink to={`${game.id}`} className="contentLink">
                <img src={game.icone} alt={`Image jeux: ${game.name}`} className='headImg' />
                <div className="contentInfo">
                    <div className='contentTitle'>
                        {game.name}
                    </div>
                    <div className='contentRates'>
                        {rank.map((etoiles) => 
                            (game.rates >= etoiles) ? <span key={x++} className='starJaune'>★</span> : <span key={x++} className='starGris'>☆</span>                        
                        )}
                    </div>
                </div>
            </NavLink>
        </li>
    )
}

export default GameWidget