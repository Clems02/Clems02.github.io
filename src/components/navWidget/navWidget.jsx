import './navWidget.css'
import { NavLink } from 'react-router-dom'


function NavWidget({ name, icone, link, setMenuOpen }) {
    return (
            <NavLink to={link} className='widget-block' onClick={() => setMenuOpen(false)}>
                {icone}
                <span className='widget-name'>{name}</span>
            </NavLink>
    )
}

export default NavWidget