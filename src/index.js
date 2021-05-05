const express = require ('express');
const engine = require ('ejs-mate');
const path = require('path');

//inicializações
const app = express();

//settings
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//rotas
app.use(require('./routes/'))

//static files
app.use(express.static(path.join(__dirname, 'public')))

//servidor
app.listen(3000, () => {
    console.log('Server on port 3000');
});