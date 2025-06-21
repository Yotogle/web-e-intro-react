

export const Card = ({nombre, profesion, descripcion }) => {
    return (
        <>

        <div className="card bg-primary my-3 text-white">
            <h2>{nombre}</h2>
            <p>Profesion: {profesion}</p>
            <p>{descripcion}</p>
        </div>
            
        </>

    )
}