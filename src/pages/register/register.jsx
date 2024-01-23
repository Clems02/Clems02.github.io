import { useState } from 'react';
import Block from '../../components/block/block'
import { NavLink } from 'react-router-dom';

import './register.css'

function Register() {

    const [registrationInfo, setRegistrationInfo] = useState({
        pseudo: '',
        email: '',
        numTel: '',
        password: ''
    })

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(registrationInfo)
    }

    const onChange = (e) => {
        setRegistrationInfo({
            ...registrationInfo,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <div className='blockLogin'>
            <Block>
                

                <div className='head'>
                    <h1>Inscription</h1>
                </div>

                <div className='catdesc'>
                    <p className='desc'>Vous possèdez déja un compte ?</p>
                    <NavLink to="/login" className='registerButton'>Connectez-vous</NavLink>
                </div>


                <form className='catcontent loginMain' onSubmit={onSubmit}>

                    <div className='loginInfo'>
                        <label htmlFor="pseudo">Pseudo: </label>
                        <input type="text" name='pseudo' value={registrationInfo.login} onChange={onChange} />
                    </div>
                    <div className='loginInfo'>
                        <label htmlFor="email">Email: </label>
                        <input type="email" name='email' value={registrationInfo.email} onChange={onChange} />
                    </div>
                    <div className='loginInfo'>
                        <label htmlFor="numTel">N° téléphone: </label>
                        <input type="tel" name='numTel' value={registrationInfo.numTel} onChange={onChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
                    </div>
                    <div className='loginInfo'>
                        <label htmlFor="password">Mot de passe: </label>
                        <input type="password" name='password' value={registrationInfo.password} onChange={onChange} />
                    </div>
                    <div className='loginInfo'><button className='loginBtn'>Valider</button></div>
                    
                </form>
                
            </Block>
</div>
            
    )
}

export default Register