import { useEffect, useState } from 'react'
import './accueil.css'
import Block from '../../components/block/block';
import Accordion from '../../components/accordion/accordion';
import AccordionItem from '../../components/accordionItem/accordionItem';
import { DataAccueil } from '../../data/accueil'

function Accueil() {

    return (


            
                <Accordion data={DataAccueil} />
            
   

    )
}

export default Accueil