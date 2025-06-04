
export const Card = ({nombre, profesion, descripcion }) => {
    return (
        <>
            <div className="card">
                <h2>{nombre}</h2>
                <h3>{profesion}</h3>
                <p>{descripcion}</p>
            </div>
        </>

    )
}