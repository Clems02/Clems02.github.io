import logo from '../../assets/logo.png'

import './title.css'


function Title({bgColor, height="50", width="190"}) {

    return (
        <div className='title-block' style={{backgroundColor : bgColor}}>
            <img src={logo} alt="Rapid'Games logo" width={width} height={height} className='title-img' />
        </div>
    )
}

export default Title