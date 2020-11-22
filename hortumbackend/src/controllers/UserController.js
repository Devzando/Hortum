const { encrypt, decrypt } = require('../helpers/cryptography');
const { generateToken } = require('../helpers/jwt');
const knex = require('../database/connection');

module.exports = {
    async create(req, res){
        const { name, password } = req.body;

        const result = await knex('users').where('name', name);

        if(result == ''){ 
            const hash = encrypt(password);
            const result = await knex('users').insert({name, password: hash});
            const token = generateToken(hash, result[0]);
            
            return res.json({id:result[0], token});
        }
        return res.json({massage: 'User is registered, please try again'});
    },

    async login(req, res){
        const { name, password } = req.body;
        const result = await knex('users').where('name', name);

        if(result == '') return res.json({massage: 'erro, tente novamente'}); 

        const compareHash = decrypt(password, result[0].password);
        
        if(compareHash) {
            const token = generateToken(result[0].password, result[0].id);
            return res.json({token, id:result[0].id});
        }

        return res.json({massage: 'credênciais erradas, tente novamente'});

    }
}