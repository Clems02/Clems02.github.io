import '../styles/gameWidget.css'

function GameWidget({ name, icone, succes }) {
    const rank = [1, 2, 3, 4, 5];

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
                            (succes >= etoiles) ? <span className='starJaune'>★</span> : <span className='starGris'>☆</span>
                        )}
                    </div>
                </div>
            </a>
        </li>
    )
}

export default GameWidget