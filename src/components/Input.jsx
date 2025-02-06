import styled from "styled-components";

const StyledInput = styled.input`
    margin: 4px;
    background: #A4A5A6;
    border: solid 2px ${(props) => props.IsError ? '#FF5555' : 'white'} ;
    border-radius: 5px;
    height: 32px;
    color:rgb(7, 12, 22);
    font-weight: 400;
    outline: none;
    transition: all 0.3s ease-in-out; 
`
export default function Input({type, placeholder,value, onChange, IsError}){
    return(
        <StyledInput 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={onChange}
        IsError = {IsError}
        />
    )
    
}