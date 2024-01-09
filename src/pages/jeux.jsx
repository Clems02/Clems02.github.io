import { game } from '../data/game'
import GameWidget from '../components/GameWidget.jsx'
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
                <p className='desc'>Les joueurs qui aiment prendre des risques et se lancer dans l'inconnu vont pouvoir assouvir leur soif de découverte en jouant à des jeux d'aventure. Parcourez des pays lointains, découvrez des trésors et vivez des histoires extraordinaires dans des environnements sauvages et grandioses ! Vous pourrez par exemple prendre la tête d'un groupe d'aventurier, mener à bien des quêtes et affronter des créatures fantastiques, jouer le rôle d'un détective et résoudre des enquêtes ou encore diriger votre propre commerce et faire fructifier vos affaires. Les activités ne manqueront pas dans les jeux d'aventure et le dépaysement sera garanti !
</p>
            </div>

            <div className='catcontent'>
                <ul className='contentList'>
                    {game.map(({name, icone, succes}) => (
                        <GameWidget name={name} icone={icone} succes={succes}/>
                    ))}                   
                </ul>
            </div>
        </>

    )
}

export default Jeux