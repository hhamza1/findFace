import React from 'react';
import './FaceRecognition.css';


const FaceRecognition = ({imgUrl}) => {
    return (
        <div className="center ma">
            <div className="absolute mt2">
                <img className="inputImage" id="inputImg" src={imgUrl} alt="detectable faces" />
            </div>
        </div>
    );
}

export default FaceRecognition;
