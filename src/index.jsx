import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/header/header.jsx'
import Accueil from './pages/accueil/accueil'
import Boutique from './pages/boutique/boutique'
import Jeux from './pages/jeux/jeux'
import JeuxPlay from './pages/jeux/jeuxPlay.jsx'
import Error from './pages/error/error'

import Compte from './pages/compte/compte'
import Test from './pages/testTUTO/test.jsx'

import './styles/app.css'
import Footer from './components/footer/footer.jsx'
import Main from './components/main/main.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>

        <Header />

        <Main>

            

                <Routes>

                    
                    

                    <Route path="/" element={<Accueil />} />
                    <Route path="/boutique" element={<Boutique />} />

                    <Route path="/jeux" element={<Jeux />} />
                    <Route path="/jeux/:id" element={<JeuxPlay />} />

                    <Route path="/compte" element={<Compte />} />

                    <Route path="/test" element={<Test />} />



                    <Route path="*" element={<Error />}/>


                </Routes>
            


        </Main>

        <Footer />

    </Router >
)


/*
<React.StrictMode>

</React.StrictMode>
*/