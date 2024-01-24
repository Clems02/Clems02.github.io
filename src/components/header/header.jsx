import { widget } from "../../data/widget"
import NavWidget from '../navWidget/navWidget'
import Title from "../title/title"
import './header.css'
import { useState } from "react"

import { useAuth0 } from "@auth0/auth0-react";


function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { logout } = useAuth0();


    return (

        <nav>

            <Title bgColor="rgba(0,0,0,0.15)" />

            <div className="navBar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div className="navBar-right">
                <div className={`filtre ${menuOpen ? "filtreActive" : ""}`} onClick={() => setMenuOpen(false)}></div>
                <ul className={`navBar-widget ${menuOpen ? "isOpen" : ""}`} >
                    {widget.map(({ id, name, icone, link }) => (
                        <NavWidget key={id} name={name} icone={icone} link={link} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                    ))}
                </ul>

                {/**Test btn logout */}
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Déconnexion
                </button>


            </div>
        </nav>
    )
}

export default Header