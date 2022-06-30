const Usuario = require('../models/crud');

exports.index = (req, res) => {
    res.render('./includes/usuario');
}

exports.insert = async (req, res) => {
    try {
        const usuario = new Usuario(req.body.nome, req.body.senha);
        await usuario.insert();
        res.redirect('back');
    } catch {
        return res.render('includes/404');
    }
}
