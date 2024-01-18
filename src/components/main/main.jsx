import './main.css'

function Main({children}) {

    console.log("main")
    return (
        <div className="main">
            {children}
        </div>
    )
}

export default Main