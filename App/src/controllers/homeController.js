const Usuaurio = require('../models/crud');

exports.select = async (req, res) => {
    const usuarios = await Usuaurio.select();
    res.render('index', { usuarios });
}
