import { Routes, Route } from 'react-router-dom'
import Background from './background'
import NavBar from './navBar'
import '../styles/app.css'
import Boutique from '../pages/boutique'
import Compte from '../pages/compte'
import Accueil from '../pages/accueil'
import Jeux from '../pages/jeux'

function App() {

  return (
    <>
      <Background />

      <div className='app-block'>
        <NavBar />

        
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/jeux" element={<Jeux />} />
          <Route path="/compte" element={<Compte />} />
        </Routes>

      </div>
    </>

  )
}

export default App
