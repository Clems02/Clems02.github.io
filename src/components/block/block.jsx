import './block.css'

function Block({children, bgColor = '#eee'}) {

    return (
        <div className="compBlock" style={{backgroundColor: bgColor}}>
            {children}
        </div>
    )
}

export default Block