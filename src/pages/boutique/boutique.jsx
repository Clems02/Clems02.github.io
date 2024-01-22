import Block from "../../components/block/block"
import BoutiqueCard from "../../components/boutiqueCard/boutiqueCard"
import { article, pieceOr } from "../../data/boutique"
import piece from '../../assets/piece.png'
import './boutique.css'
import { useState } from "react"


function Boutique() {
    const [pieceShop, setPieceShop] = useState(false);

    const handleSwitch = () => {
        setPieceShop(!pieceShop);
        console.log(pieceShop)
    }


    return (
        <Block>

            <div className="head">
                <h1>Boutique</h1>
            </div>

            <div className="catdesc">
                <p className="desc">
                    Vous trouverez dans la boutique différents objets et bonus afin d'améliorer votre expérience de joueur sur Rapid'Games. Ces bonus peuvent être par exemple des vies supplémentaires à utiliser en jeu ou des multiplicateurs de scores.
                    L'ensemble des bonus et objets ci-dessous sont uniquement échangeables contre des pièces d'or. Vous pourrez récolter des pièces d'or dans certains jeux ou bien en les achetant directement dans la boutique.
                </p>
                <button className="btnAchatPiece" onClick={() => handleSwitch()}>
                    {pieceShop ? 
                    <>Echanger vos <img src={piece} alt="Acheter des pièces d'or" className="pieceLogo" /></> : 
                    <>Acheter des <img src={piece} alt="Acheter des pièces d'or" className="pieceLogo" /></>}

                </button>
            </div>

            <div className="catcontent">
                <ul className="contentList">
                    {/*En fonction du state, affiche les pièces ou les articles*/}
                    {pieceShop ?
                        pieceOr.map((piece) => (
                            <BoutiqueCard key={piece.id} name={piece.name} icon={piece.icon} price={piece.price} isPiece={true} />
                        )) :

                        article.map((article) => (
                            <BoutiqueCard key={article.id} name={article.name} icon={article.icon} price={article.price} />
                        ))}
                </ul>
            </div>


        </Block>
    )
}

export default Boutique