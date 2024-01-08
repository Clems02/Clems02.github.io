import logo from '../assets/logo.jpg'
import '../styles/title.css'


function Title() {
    return (
        <div className='title-block'>
            <img src={logo} alt="Logo application" className='title-img' />
            <h1 className='title-h1'>Rapid'Games</h1>
        </div>
    )
}

export default Title