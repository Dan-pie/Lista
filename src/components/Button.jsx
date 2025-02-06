import styled from "styled-components";

const StyledButton = styled.button`
    margin: 2px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color:rgb(193, 219, 247);
    color:rgb(84, 84, 84);
    font-size: 16px;
    font-weight: bold;
    transition: all 0.3s ease-in-out; 
    transform-origin: center; 

    &:hover {
        cursor: pointer;
        color:rgb(50, 154, 76);
        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.52);
        transform: scale(1.05); 
    }

    &:active {
        transform: scale(0.95); 
    }

`

export default function Button({name_btn, onClick}){
    return(
        <StyledButton onClick={onClick}> 
            {name_btn} 
        </StyledButton>
    )
}