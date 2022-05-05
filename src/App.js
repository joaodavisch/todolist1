import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

var captar = '';

function App() {

  const [nome, setNome] = useState()

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor)
  }

  const consultar = (chave) => {
    document.getElementById(localStorage.getItem("ls_nome")).innerHTML = captar;
  }

  const apagar = (chave) => {
    localStorage.removeItem(chave)
  }

  function chamar() {
    captar = document.getElementById("valor").value;
    document.getElementById("digito").innerHTML = captar;
    // document.getElementById(localStorage.getItem("digito")).innerHTML = captar;
  };

  return (
    <Container maxWidth="lg" style={{ backgroundColor: "white" }}>
    <>
        <div className="labelInput">
          <label>Digite um nome</label>
          <input type="text" className="inputLabel" value={nome} id="valor" onChange={(e) => setNome(e.target.value)} />
          <Button variant="outlined" onClick={chamar} >Outlined</Button>
        </div>
        <ul id="digito">
        </ul>
    </>
    </Container>
  );
}
export default App;
