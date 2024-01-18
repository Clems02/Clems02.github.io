import { useEffect, useState } from 'react'
import './accueil.css'
import Block from '../../components/block/block';
import Accordion from '../../components/accordion/accordion';
import AccordionItem from '../../components/accordionItem/accordionItem';
import { DataAccueil } from '../../data/accueil'

function Accueil() {
    const [inc, setInc] = useState([1, 2, 3]);

    const changeInc = () => {
        setInc([...inc, 4]);
    }

    return (


            
                <Accordion data={DataAccueil} />
            
   

    )
}

export default Accueil