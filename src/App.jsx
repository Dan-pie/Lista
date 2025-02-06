import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Input from './components/Input'
import Button from './components/Button'


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');


  body{
    background: #0C1526;
    color: white;
    font: normal 12pt "Roboto";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  h1{
    text-shadow: 0px 1px 4px rgba(255, 255, 255, 0.52);
  }
  .container{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

`

function App() {
  const [nome, setNome] = useState('')
  const [IsError, setIsError] = useState(false)
  const [List, setList] = useState([])
  const [visiblitylist, Setvisiblity] = useState(false)


  const verify = () => {
    if(nome.length == 0){
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      },1000)
    }

    else if(List.includes(nome)){
      setIsError(true)
      setTimeout(() => {
        setIsError(false)
      },1000)
      
    }
    
    else{
      setIsError(false)
      setList([...List, nome])
      setNome('')
      console.log(List)
    }
  }

  const view = () => {
    Setvisiblity( !visiblitylist)
    console.log(visiblitylist)
  }

  return (
    <>
    <GlobalStyle/>
      <h1>Cadastro 
        <span>
          (Com React)
        </span>
      </h1> 
      
      <div className="container">
        <Input 
          type='text' 
          placeholder='Nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}  
          IsError={IsError}
        />
        
        <Button 
          name_btn='Cadastrar'
          onClick={verify}
        />
        <Button
          name_btn='Listar'
          onClick={view}
        />
      </div>
      <div className='container'>
          {visiblitylist &&(
             <div>
             <h2>Lista de Nomes</h2>
             <ul>
               {List.map((nome, index) => (
                 <li key={index}>{nome}</li>
               ))}
             </ul>
           </div>
          )}
        </div>
    </>
  )
}

export default App
