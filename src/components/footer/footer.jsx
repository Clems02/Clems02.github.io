import Title from '../title/title'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <Title height={"30"} width={"95"}/>

            <p className='copyright'>Copyright ©</p>
        </div>
    )
}

export default Footer