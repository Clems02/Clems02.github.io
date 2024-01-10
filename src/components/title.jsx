import logo from '../assets/logo.png'
import '../styles/title.css'


function Title() {
    return (
        <div className='title-block'>
            <img src={logo} alt="Rapid'Games logo" className='title-img' />
        </div>
    )
}

export default Title