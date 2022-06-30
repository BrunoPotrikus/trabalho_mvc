const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const {
    middlewareGlobal,
    csrfErrorMessage
} = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, '../public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(csrf());
app.use(middlewareGlobal);
app.use(csrfErrorMessage);
app.use(routes);
app.use(helmet());

app.listen(3000, () => {
    console.log('Servidor na porta 3000');
});