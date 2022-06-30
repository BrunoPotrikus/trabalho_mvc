module.exports.middlewareGlobal = (req, res, next) => {
    if (req.body.nome) {
        console.log(`Bem vindo ${req.body.nome}`);
    }
    next();
};

module.exports.csrfErrorMessage = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN') {
        console.log('Middleware 2');
        return res.send('CSRF ERROR');
    }
    next();
};