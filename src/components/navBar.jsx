import { widget } from "../data/widget"
import Widget from "./widget"
import Title from "./title"
import '../styles/navBar.css'
import { useState } from "react"

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav>

            <Title />

            <div className="navBar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="navBar-right">
                <ul className={`navBar-widget ${menuOpen ? "isOpen" : ""}`} onClick={() => setMenuOpen(false)}>
                {widget.map(({ id, name, icone, link }) => (
                    <Widget key={id} name={name} icone={icone} link={link} menuOpen={menuOpen} />
                ))}
            </ul>
            </div>


            



        </nav>
    )
}

export default NavBar