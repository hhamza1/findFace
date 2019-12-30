import React, {Component} from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';
import ImgForm from './ImgForm/ImgForm';
import FaceRecognition from './FaceRecognition/FaceRecognition';
import Rank from './Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';


const app = new Clarifai.App({
    apiKey: 'becf5300fc13437b8e2087b611eb785f'
});


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

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imgUrl: '',
            box: {}
        }
    }

    getFaceLocation = (data) => {
        console.log(data.outputs[0].data.regions[0].region_info.bounding_box);
    }

    onInputChange = (event) => {
        this.setState({input : event.target.value});
    }

    onDetect = () => {
        this.setState({imgUrl: this.state.input});
        app.models
            .predict(
                Clarifai.FACE_DETECT_MODEL, 
                this.state.input)
            .then(response => this.getFaceLocation(response))
            .catch(err => console.log(err));
    }   
    

    render() {
        return (
            <div className="App">
            <Particles
                params={particlesParams}
                className="particles"
            />
                <Navigation />
                <Logo />
                <Rank />
                <ImgForm 
                    onInputChange={this.onInputChange} 
                    onDetect={this.onDetect} />

                <FaceRecognition imgUrl={this.state.imgUrl} />
            </div>
        );
    }
}


export default App;



