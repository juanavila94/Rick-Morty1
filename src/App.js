import './App.css';
import { About } from './components/About';
import { Detail } from './components/Detail';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import { useState } from 'react';
import styled from 'styled-components';
import { Route,Routes } from 'react-router-dom';

const DivApp = styled.div`
  text-align: center;
`
const DivCards = styled.div`
  text-align: center;
`

function App() {
  const [characters, setCharacters] = useState([]);
  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then(res => res.json())
      .then(data => {
        if (data.name) {
          let repe=false;
          characters.forEach(char => {
            if (char.id == character) {
              repe=true;
            }

          });
          if(!repe){
            setCharacters([...characters, data]);
          }else{
            alert("Ya ingreso este personaje");
          }
        } else {
          alert("No existe personaje con ese ID");
        }
      })
      .catch(err => console.log(err));
  }
  const onClose = (id) => {
    setCharacters(characters.filter(char => char.id !== id));
  }
  return (
    <DivApp>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/" element={<Cards characters={characters}
          onClose={onClose}/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/detail/:detailId" element={<Detail/>} />  
      </Routes>
    </DivApp>
  )
}

export default App
