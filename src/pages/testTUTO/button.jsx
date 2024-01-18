export const Card = ({onClick, children}) => {


    return (
        <>
        <button onClick={onClick}>aze</button>


        <div onClick={onClick}>Salut</div>
        {children}
        </>
    )

}

export default Card