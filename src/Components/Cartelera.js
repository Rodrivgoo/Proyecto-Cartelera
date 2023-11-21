import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Diseños.css';

const CarruselPrimerasCinco = ({ peliculas }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
  
    return (
      <div className="carrusel-primeras-cinco">
        <h4 className='palabras'>Estrenos más recientes</h4>
        <Slider {...settings}>
          {peliculas.slice(0, 5).map((movie) => (
            <div key={movie.id} className="slide-item">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="carrusel-imagen"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };

const Cartelera = () => {
    const [peliculas, setPeliculas] = useState([]);
    const [busqueda, setBusqueda] = useState('');

    useEffect(() => {
        const fetchPeliculas = async () => {
            const apiKey = '2e86bc9495548e9a7b0206823c2fdc34';
            const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=es`);
            const data = await response.json();
            setPeliculas(data.results);
        };
        fetchPeliculas();
    }, []);

    const handleBusquedaChange = (event) => {
        setBusqueda(event.target.value);
    };

    const peliculasFiltradas = peliculas.filter((movie) =>
        movie.title.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div className="container mt-4">
            <div className="search-box-right">
                <input
                    type="text"
                    placeholder="search"
                    value={busqueda}
                    onChange={handleBusquedaChange}
                />
            </div>
            <h1 className="page-title">Cartelera de Cinepolis</h1>
            <CarruselPrimerasCinco peliculas={peliculas} />
            <div className="row">
                {peliculasFiltradas.map((movie) => (
                    <div key={movie.id} className="col-md-3 mb-4">
                        <div className="card h-100">
                            <img
                                className="card-img-top"
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{movie.title}</h5>
                                <Link to={`/pelicula/${movie.id}`} className="btn btn-primary">
                                    Ver Descripción
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cartelera;
