import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Diseños.css';

const Cartelera = () => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchPeliculas = async () => {
        const apiKey = '2e86bc9495548e9a7b0206823c2fdc34';
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es`);
        const data = await response.json();
        setPeliculas(data.results);
        };
        fetchPeliculas();
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="page-title">Cartelera de Cinepolis</h1>
            <div className="row">
                {peliculas.map((movie) => (
                <div key={movie.id} className="col-md-4 mb-4">
                    <div className="card h-100">
                      <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                      <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                            <Link to={`/pelicula/${movie.id}`} className="btn btn-primary">Ver Descripción</Link>
                      </div>
                    </div>
                </div>
              ))}
            </div>
        </div>
    );
};

export default Cartelera;
