
import { IoGameControllerOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { GrTest } from "react-icons/gr";




export const widget = [
    {
        name: 'Accueil',
        id: '1acc',
        icone: <GoHome color='white' size="1.7em" style={{ margin: "4px 8px 4px 4px" }} />,
        link: '/'
    },
    {
        name: 'Jeux',
        id: '2jx',
        icone: <IoGameControllerOutline color='white' size="1.7em" style={{ margin: "4px 8px 4px 4px" }} />,
        link: '/jeux'
    },
    {
        name: 'Boutique',
        id: '3bout',
        icone: <TbShoppingBag color='white' size="1.7em" style={{ margin: "4px 8px 4px 4px" }} />,
        link: '/boutique'

    },
    {
        name: 'Compte',
        id: '4cpt',
        icone: <FaRegUser color='white' size="1.4em" style={{ margin: "4px 8px 4px 4px" }} />,
        link: '/compte'
    },
    {
        name: 'Test',
        id: '5tte',
        icone: <GrTest color='white' size="1.4em" style={{ margin: "4px 8px 4px 4px" }} />,
        link: '/test'
    }
]


