import { game } from '../data/game'
import GameWidget from '../components/gameWidget'
import '../styles/jeux.css'
import { useEffect, useState } from 'react'

function Jeux() {
    const [cat, setCat] = useState('Toutes');

    const categories = ['Toutes'];

    game.forEach(({ categorie }) => {
        if (!categories.includes(categorie)) {
            categories.unshift(categorie);
        }
    });

    const handleClick = (e) => {
        setCat(e.target.textContent)
    }

    const PrintJeux = () => {
        if(cat === 'Toutes') {
            return (
                <>
                {game.map(({ name, id, icone, rates, categorie }) => (
                        <GameWidget key={id} name={name} icone={icone} rates={rates} categorie={categorie} />
                    ))}
                </>
            )
        } else {
            return (
                <>
                {game.filter((val) => {
                        return val.categorie.includes(cat);
                    })
                    .map(({ name, id, icone, rates, categorie }) => (
                        <GameWidget key={id} name={name} icone={icone} rates={rates} categorie={categorie} />
                    ))}
                </>
            )
        }
    }

    return (
        <>
            <div className='head'>
                <h1>Jeux d'aventure</h1>
                <ul className='cathead'>
                    {categories.map((cat) => (
                        <li key={cat} onClick={handleClick}>{cat}</li>
                    ))}
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
                    <PrintJeux />
                </ul>
            </div>
        </>
    )
}

export default Jeux