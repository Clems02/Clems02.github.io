import './boutiqueCard.css'
import { TbShoppingBagPlus } from "react-icons/tb"
import money from '../../assets/piece.png'




//Fichier CSS partagé avec GAME-WIDGET
//Faire un composant Card ?

function BoutiqueCard({ id, name, icon, price, isPiece }) {

    const printPrice = () => {
        if (isPiece) {
            return (
                <>
                    {price} €
                </>
            )
        } else {
            return (
                <>
                    {price}
                    <img src={money} alt="" className='articleImg' />
                </>
            )
        }
    }




    return (
        <li className="contentItem boutiqueCard">
            <div className="contentLink">  {/*Possible de passer en NavLink pour page détails*/}
                <img src={icon} alt={`Image article: ${name}`} className='headImg' />

                <div className="contentInfo">
                    <div className='contentTitle'>
                        {name}
                    </div>
                    <div className='contentPrice'>
                        {printPrice()}



                        {/* {price} <img src={money} alt="" className='articleImg' /> */}
                        <div className='iconAddShop'>
                            <TbShoppingBagPlus size="1.5em" color='white' />
                        </div>

                    </div>
                </div>

            </div>


        </li>
    )
}

export default BoutiqueCard