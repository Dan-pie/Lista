import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Input from './components/Input';
import Button from './components/Button';
import { db, collection, addDoc, deleteDoc, doc, getDocs } from './firebase';

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

  li{
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  svg {
  fill: white;
  width: 10px;
  height: 20px;
  margin: 0px 10px;
  transition: 0.5s;
  
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    fill: red;
  }
}

`;

function App() {
  const [nome, setNome] = useState('');
  const [IsError, setIsError] = useState(false);
  const [List, setList] = useState([]);
  const [visiblitylist, Setvisiblity] = useState(false);
  const nomesCollection = collection(db, 'nomes'); 

  const fetchNames = async () => {
    const querySnapshot = await getDocs(nomesCollection);
    const nomes = [];
    querySnapshot.forEach((doc) => {
      nomes.push({ id: doc.id, ...doc.data() }); 
    });
    setList(nomes); 
  };

  useEffect(() => {
    fetchNames();
  }, []);


  const verify = async () => {
    if (nome.length === 0) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 1000);
    } else if (List.some((item) => item.nome === nome)) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 1000);
    } else {
      setIsError(false);
      
      await addDoc(nomesCollection, { nome });
      setNome('');
      fetchNames(); 
    }
  };


  const delete_list_name = async (idToDelete) => {
    await deleteDoc(doc(nomesCollection, idToDelete)); 
    fetchNames(); 
  };

  const view = () => {
    Setvisiblity(!visiblitylist);
  };

  return (
    <>
      <GlobalStyle />
      <h1>Cadastro <span>(Com React)</span></h1>
      <div className="container">
        <Input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          IsError={IsError}
        />
        <Button 
          name_btn="Cadastrar" 
          onClick={verify} 
        />
        <Button 
          name_btn="Listar" 
          onClick={view} 
        />
      </div>

      <div className="container">
        {visiblitylist && (
          <div>
            <h2>Lista de Nomes</h2>
            <ul>
              {List.map((item) => (
                <li key={item.id}>
                  {item.nome}
                  <svg
                    onClick={() => delete_list_name(item.id)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
