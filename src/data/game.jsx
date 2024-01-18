import icone from '../assets/testgame.jpg'

/*
Catégorie:
- Réflexion
- Adresse
- Patience
*/

export const gameDefault = {
    name: 'Default',
    id: 'Default',
    icone: null,
    rates: null,
    categorie: ['Default']
}

export const game = [
    {
        name: 'Snake',
        id: '1sna',
        icone: icone,
        rates: 5,
        categorie: ['Toutes', 'Adresse'],
        description: "Incarne un serpent affamé ! Pour assouvir sa faim, tente de récolter le plus de fruit possible. Certains fruits te permettront de rassasier davantage ton serpent, et donc d'augmtenter ton score ! Attention, à chaque fois que ton serpent se nourira, sa taille augmentera. Seulement, s'il se mort la queue, la partie sera terminée... "  
    },
    {
        name: 'Tours de Hanoï',
        id: '2than',
        icone: icone,
        rates: 2,
        categorie: ['Toutes', 'Réflexion']
    },
    {
        name: "Taupe'Moi",
        id: '3tau',
        icone: icone,
        rates: 4,
        categorie: ['Toutes', 'Adresse']
    },
    {
        name: 'Jump Jump Jump',
        id: '4jmp',
        icone: icone,
        rates: 4,
        categorie: ['Toutes', 'Adresse']
    },
    {
        name: 'Memory',
        id: '5mem',
        icone: icone,
        rates: 5,
        categorie: ['Toutes', 'Réflexion']
    },
    {
        name: "Speed'Calc",
        id: '6spc',
        icone: icone,
        rates: 1,
        categorie: ['Toutes', 'Réflexion']
    },
    {
        name: 'Tower block',
        id: '7tbl',
        icone: icone,
        rates: 3,
        categorie: ['Toutes', 'Patience']
    },
    {
        name: 'Crêpes party',
        id: '8crep',
        icone: icone,
        rates: 4,
        categorie: ['Toutes', 'Réflexion']
    }
]

export function gameCategorie() {
    const tabCategorie = [];

    game.map((jeux) => (
        jeux.categorie.map((cat) => (
            tabCategorie.includes(cat) ? null : tabCategorie.unshift(cat)
        ))
    ));

    return tabCategorie;
}