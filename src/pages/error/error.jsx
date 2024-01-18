import './error.css'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
        <div className="error">
            <p>Malheureusement cette page n'existe pas...</p>

            <NavLink to={"/"} className="back">Retour à l'accueil</NavLink>
        </div>
    )
}

export default Error