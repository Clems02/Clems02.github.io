import { game } from '../data/game'
import '../styles/jeux.css'

function Jeux() {
    return (
        <div className='game-block'>
            <h1>Choisi ton jeu et gravis le classement général !</h1>

            <ul className='game-list'>
                {game.map((game) => (
                    <li key={game.id} className='game-item'>
                        <img src={game.icone} alt="" />
                        <span>{game.name}</span>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default Jeux