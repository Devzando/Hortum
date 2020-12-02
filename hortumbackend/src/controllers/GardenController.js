const knex = require('../database/connection');
const { join } = require('../database/connection');

module.exports = {
    async create(req, res){
        const { name, description, color } = req.body;
        const id = req.params.id;

        try {
            await knex('gardens').insert({name, description, color, imagegarden_id: id, user_id: req.userId});
            return res.json({name, description, color });    
        } catch (error) {
            return res.json({massage: 'erro, faça login novamente'});
        }
    },

    async index(req, res) {

        try {
            const result = await knex('gardens').where('user_id', req.userId)
            .select('gardens.color', 'gardens.name', 'gardens.description', 'gardens.id')
            .join('imagegardens', 'imagegardens.id', '=', 'gardens.imagegarden_id')
            .select('imagegardens.image_url');
            
            result.forEach(item => {
                return item.image_url =  `http://192.168.0.103:3333/uploads/${item.image_url}`
           })
            res.json(result);

        } catch (error) {
            res.json({massage: 'erro ao carregar'});
        }
    },

    async delete(req, res) {
        const id = req.params.id;
        try {
            await knex('gardens').where('id', id).del();
            return res.json({massage: 'Deletado com sucesso'});
        } catch (error) {
            console.log(error)
            return res.json({massage: 'Erro ao tentar deletar, tente novamente'});
        }

    }
}