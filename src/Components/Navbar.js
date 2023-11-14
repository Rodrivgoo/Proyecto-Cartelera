import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ currentIndex, peliculasIds }) => {
    const navigate = useNavigate();

    const avanzar = () => {
        if (currentIndex < peliculasIds.length - 1) {
            const nextMovieId = peliculasIds[currentIndex + 1];
            navigate(`/pelicula/${nextMovieId}`);
        }
    };

    const retroceder = () => {
        if (currentIndex > 0) {
            const previousMovieId = peliculasIds[currentIndex - 1];
            navigate(`/pelicula/${previousMovieId}`);
        }
    };

    const volver = () => {
        navigate('/');
    };

    return (
        <div>
            <div className="navegacion-peliculas">
                <button onClick={retroceder} className="btn btn-navegacion">Película Anterior</button>
                <button onClick={avanzar} className="btn btn-navegacion">Siguiente Película</button>
                <button onClick={volver} className="btn btn-navegacion">Home</button>
            </div>
        </div>
    );
};

export default Navbar;

