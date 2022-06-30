const database = require('./bd');
const User = require('./User');

function Usuario (nome, senha) {
    this.nome = nome;
    this.senha = senha;
}

Usuario.prototype.insert = async function () {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoCreate = await User.create({
            userName: this.nome,
            userPwd: this.senha,
        })
        console.log(resultadoCreate);
    } catch (error) {
        console.log(error);
    }
}

Usuario.select = async () => {

    await database.sync();

    try {
        const resultado = await database.sync();
        console.log(resultado);
 
        const resultadoRead = await User.findAll();
        console.log(resultadoRead);
        return resultadoRead;
    } catch (error) {
        console.log(error);
    }   
}

module.exports = Usuario;