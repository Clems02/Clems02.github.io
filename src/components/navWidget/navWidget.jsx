import './navWidget.css'
import { NavLink } from 'react-router-dom'


function NavWidget({ name, icone, link }) {
    return (
            <NavLink to={link} className='widget-block'>
                <img src={icone} alt={`${name}-icone`} className='widget-img' />
                <span className='widget-name'>{name}</span>
            </NavLink>
    )
}

export default NavWidget