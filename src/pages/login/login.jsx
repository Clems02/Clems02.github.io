import { useState } from 'react';
import Block from '../../components/block/block'
import { NavLink } from 'react-router-dom';

import './login.css'

function Login() {

    const [credentials, setCredentials] = useState({
        pseudo: '',
        password: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(credentials)
    }

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <div className='blockLogin'>
            <Block>
                

                <div className='head'>
                    <h1>S'identifier</h1>
                </div>

                <div className='catdesc'>
                    <p className='desc'>Première visite sur Rapid'Games ?</p>
                    <NavLink to="/register" className='registerButton'>Inscrivez-vous</NavLink>
                </div>


                <form className='catcontent loginMain' onSubmit={onSubmit}>

                    <div className='loginInfo pseudoInfo'>
                        <label htmlFor="pseudo">Pseudo: </label>
                        <input type="text" name='pseudo' value={credentials.pseudo} onChange={onChange} />
                    </div>
                    <div className='loginInfo passwordInfo'>
                        <label htmlFor="password">Mot de passe: </label>
                        <input type="password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className='loginInfo'><button className='loginBtn'>Connexion</button></div>
                    <div>
                        <NavLink to="/loginHelp" className="loginInfo helpLink">Login ou mot de passe oublié ?</NavLink>
                    </div>
                </form>
                
            </Block>
</div>
            
    )
}

export default Login