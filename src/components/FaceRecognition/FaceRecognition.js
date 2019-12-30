import React from 'react';
import BoundingBox from '../../styled-components/BoundingBox';
import './FaceRecognition.css';


const FaceRecognition = ({imgUrl, box}) => {
    console.log(box);
    return (
        <div className="ma center">
            <div className="absolute mt2">
                <img id="inputImg" src={imgUrl} alt="detectable faces" width="500px" height="auto" />
                <BoundingBox 
                    top={box.topRow} 
                    right={box.rightCol} 
                    bottom={box.bottomRow} 
                    left={box.leftCol}
                   />
            </div>
        </div>
    );
}

export default FaceRecognition;
