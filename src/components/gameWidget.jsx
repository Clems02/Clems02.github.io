import '../styles/gameWidget.css'

function GameWidget({ name, id, icone, rates, categorie }) {
    const rank = [1, 2, 3, 4, 5];

    let x = 1;

    return (
        <li className="contentItem">
            <a href="" className="contentLink">
                <img src={icone} height="110" width="190" alt="test-IMG" />
                <div className="contentInfo">
                    <div className='contentTitle'>
                        {name}
                    </div>
                    <div className='contentRates'>
                        {rank.map((etoiles) => 
                            (rates >= etoiles) ? <span key={x++} className='starJaune'>★</span> : <span key={x++} className='starGris'>☆</span>
                        
                        )}
                    </div>
                </div>
            </a>
        </li>
    )
}

export default GameWidget