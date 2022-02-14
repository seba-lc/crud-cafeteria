import express from 'express'; //const express = require('express');
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

const app = express(); //estoy creando así una instancia de express.
// configuración del puerto
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(path.join(__dirname, "../public"));
  console.log('sever on port ' + app.get('port'));
});  


//middlewares
app.use(morgan('dev'));
app.use(cors());
//lo siguiente es para que entienda a los JSON
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
//aqui agrego la carpeta public
app.use(express.static(path.join(__dirname, "../public")));

//ruta
//GET
app.get('/', (req, res) => { //require y response
  res.send('hola mundo :)')
})

app.get('/usuarios', (req, res) => {
  res.send('Estoy en la página de usuarios')
})