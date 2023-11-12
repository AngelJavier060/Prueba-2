const express =require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors");

app.use(cors());

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"empleados_crud1"

});

app.post("/create",(req,res)=>{
const Nombre = req.body.nombre;
const Edad = req.body.Edad;
const Pais = req.body.Pais;
const Cargo = req.body.Cargo;
const Anios = req.body.Anios;

db.query('INSERT INTO empleados(nombre,edad,pais,cargo,anios) VALUES(?,?,?,?,?)',[Nombre,Edad,Pais,Cargo,Anios],
(err,result)=>{
    if(err){
       console.log(err); 
    }else{
        res.send("Empleado Resgitrado con exito");
    }
}
);

});

app.listen(3001,()=>{
  console.log("corriendo en el puerto 3001")
})