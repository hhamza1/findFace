import React from 'react';
import './ImgForm.css';


const ImgForm = ({onInputChange, onDetect}) => {
    return (
        <div>
            <p className="f3">
                {'This app will be detecting faces in images.'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-5">
                    <input className="f4 pa2 w-70 bw0 br3 center" type="text" onChange={onInputChange} />
                    <button onClick={onDetect} className="w-30 grow f4 bw0 br3 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div> 
            </div>
        </div>
    )
}

export default ImgForm;
