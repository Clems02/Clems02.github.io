import background from '../assets/background.jpg'
import '../styles/background.css'

function Background() {
    return (
        <div className='background'>
            <img src={background} alt="Background App" />
        </div>
    )
}

export default Background