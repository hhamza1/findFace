import React from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImgForm from './ImgForm/ImgForm';
import Rank from './Rank/Rank';
import Particles from 'react-particles-js';

const particlesParams = {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": true
        },
    }
}

const App = () => {
    return (
        <div className="App">
        <Particles
            params={particlesParams}
            className="particles"
        />
            <Navigation />
            <Logo />
            <Rank />
            <ImgForm />
        </div>
    )
}


export default App;



