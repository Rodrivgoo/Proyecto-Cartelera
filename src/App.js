import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cartelera from './Components/Cartelera';
import DescripcionPelicula from './Components/DescripcionPelicula';
import Footer from './Components/Footer';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/pelicula/:id" element={<DescripcionPelicula />} />
                    <Route path="/" element={<Cartelera />} />
                </Routes>
                <div className='DivFooter'>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
