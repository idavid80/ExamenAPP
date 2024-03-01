import  express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import { PORT } from './config.js';
import index from './Routes/index.js'
//rutas dinamicas



const app = express();

//Configuracion motor de plantilla ejs
app.set('view engine',  'ejs');

// busca un archivo y lo convierte en  una ruta relativa a donde se encuentra este script (archivo)
const __dirname = dirname(fileURLToPath(import.meta.url));

// console.log(__dirname);

// join concatena / o \ en funcion del sistema operativo
app.set('views' , join(__dirname, 'views'));

// busca un archivo y lo convierte en  una ruta relativa a donde se encuentra este script (archivo)

app.use(index);
/*
app.get('/', (req, res) => {
  res.send('hello world')
})
*/
const server = app.listen(PORT);
