const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        try {
            const result = await knex('imagegardens');
             const serializedImg = result.map(item => {
                 return {Image_url: `http://192.168.0.103:3333/uploads/${item.image_url}`, id: item.id};
            });
           
            res.json(serializedImg);
            
        } catch (error) {
            res.json({massage: 'erro ao carregar'});
        }
    },
}