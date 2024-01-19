import { useEffect, useState } from 'react'

import GameWidget from '../../components/gameWidget/gameWidget.jsx'

import { game, gameCategorie } from '../../data/game'

import './jeux.css'
import Block from '../../components/block/block.jsx';

function Jeux() {
    const [games, setGames] = useState(game);
    const [categorie, setCategorie] = useState('Toutes');

    useEffect(() => {
        gamesFilter();
    }, [categorie]);

    const gamesFilter = () => {
        const tab = [];
        game.map((jeux) => (
            jeux.categorie.includes(categorie) ? tab.push(jeux) : null
        ));
        setGames(tab);
    }

    return (
        <Block>

            <div className='head'>
                <h1>Nos jeux</h1>
                <select className='cathead' onChange={(e) => setCategorie(e.currentTarget.value)}>
                    <option value="Toutes">- Catégorie -</option>
                    {gameCategorie().map((cat) => (
                        <option key={cat} value={cat} className={cat === categorie ? 'active' : null}>{cat}</option>
                    ))}
                </select>
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
                    {games.map((game) => (

                        <GameWidget key={game.id} game={game} />

                    ))}
                </ul>
            </div>
        </Block>
    )
}

export default Jeux