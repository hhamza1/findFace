import styled from 'styled-components';


const BoundingBox = styled.div `
    box-shadow: 0 0 0 3px #149df2 inset;
    cursor: pointer;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    top: ${props => `${props.top}px`};
    right: ${props => `${props.right}px`};
    bottom: ${props => `${props.bottom}px`};
    left: ${props => `${props.left}px`};

`;


export default BoundingBox;