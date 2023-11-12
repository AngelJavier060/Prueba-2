import './App.css';
import {useState} from "react"
import Axios from "axios";


function App() {

const [Nombre,setNombre] = useState("");
const [Edad,setEdad] = useState(0);
const [Pais,setPais] = useState("");
const [Cargo,setCargo] = useState("");
const [Anios,setAnios] = useState(0);

const add =()=>{
Axios.post("http://localhost:3001/create",{
  Nombre:Nombre,
  Edad:Edad,
  Pais:Pais,
  Cargo:Cargo,
  Anios:Anios
}).then(()=>{
  alert("Empleado resgistrado");
});
}

  return (
    <div className="App">
    <div className="datos">
    <label>Nombre:<input
    onChange={(event)=>{
      setNombre(event.target.value);
    }}
    type="texto"/></label>
    <label>Edad:<input 
    onChange={(event)=>{
      setEdad(event.target.value);
    }}
    type="number"/></label>
    <label>Pais:<input 
    onChange={(event)=>{
      setPais(event.target.value);
    }}
    type="texto"/></label>
    <label>Cargo:<input 
    onChange={(event)=>{
      setCargo(event.target.value);
    }}
    type="texto"/></label>
    <label>Años:<input
    onChange={(event)=>{
      setAnios(event.target.value);
    }}
    type="number"/></label>
    <button onClick={add}>Gardar datos</button>
    </div>
    </div>
  );
}

export default App;
