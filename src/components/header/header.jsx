import { widget } from "../../data/widget"
import NavWidget from '../navWidget/navWidget'
import Title from "../title/title"
import './header.css'
import { useState } from "react"

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav>

            <Title bgColor="rgba(0,0,0,0.15)" />

            <div className="navBar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="navBar-right">
                <ul className={`navBar-widget ${menuOpen ? "isOpen" : ""}`} onClick={() => setMenuOpen(false)}>
                {widget.map(({ id, name, icone, link }) => (
                    <NavWidget key={id} name={name} icone={icone} link={link} menuOpen={menuOpen} />
                ))}
            </ul>
            </div>


            



        </nav>
    )
}

export default Header