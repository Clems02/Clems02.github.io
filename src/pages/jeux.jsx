import { game } from '../data/game'
import GameWidget from '../components/gameWidget'
import '../styles/jeux.css'

function Jeux() {
    return (
        <>
            <div className='head'>
                <h1>Jeux d'aventure</h1>
                <ul className='cathead'>
                    <li>Solo</li>
                    <li>Casse-tête</li>
                    <li>Clicker</li>
                    <li>Autre</li>
                    <li>Toutes</li>
                </ul>
            </div>

            <div className='catdesc'>
                <p className='desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores suscipit exercitationem cumque consequatur voluptates voluptatum nobis, minus quos ipsam a. Consequuntur tenetur minus, non repellendus doloremque maxime suscipit optio eos.
                    Deserunt sapiente, magni nisi repudiandae blanditiis laborum rerum excepturi beatae tempore aut veritatis inventore dolorum assumenda dolores, non id dignissimos dolore perspiciatis similique atque nihil quam nesciunt! Voluptatum, nihil neque!
                    Perspiciatis, eveniet. Tenetur obcaecati explicabo eveniet officia aliquam est tempora dignissimos hic odio commodi alias omnis, reiciendis, similique exercitationem rerum doloremque fugiat iure dolores vero ex accusantium sed. Quod, molestiae!
                </p>
            </div>

            <div className='catcontent'>
                <ul className='contentList'>
                    {game.map(({name, icone, rates}) => (
                        <GameWidget name={name} icone={icone} rates={rates}/>
                    ))}                   
                </ul>
            </div>
        </>

    )
}

export default Jeux