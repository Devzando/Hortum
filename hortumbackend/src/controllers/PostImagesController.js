const knex = require('../database/connection');

module.exports = {
    async create(req, res) {
        const image_url = `http://192.168.0.102:3333/uploads/${req.file.filename}`;
        const { name, description, width, heigth } = req.body;
        const likes = 0;
        const aspect = width/heigth;

        try {
            const result = await knex('postimages')
            .insert({name, image_url, description, user_id: req.userId, aspect });

            const id = result[0];
            return res.json({ name, image_url, description, likes, aspect, id });
        } catch (error) {
            console.log(error);
            return res.json({ massage: 'Você não possui autorização, tente realizar login novamente' });
        }
    },

    async index(req, res) {
        const Page = Number(req.query.page);
        const limit = 5;

        const jump = (Page - 1) * limit;

        try {
            const result = await knex('postimages')
            .limit(limit)
            .offset(jump);

            const [numberOfRecords] = await knex('postimages').count('id as id');

            const numberPage =  Math.ceil(numberOfRecords.id/5); 

            return res.json({result, numberPage });

        } catch (error) {
            console.log(error);
            return res.json({ massage: 'Você não possui autorização, tente realizar login novamente' });
        }

    },

    async likesUpdate(req, res) {
        const id_image = req.params.id;
        const like = req.body.postLike;

        try {
            await knex('postimages').where('id', id_image).update('like', like);
            return res.status(200);
        } catch (error) {
            console.log(error);
            return res.json({ massage: 'Você não possui autorização, tente realizar login novamente' });
        }
    }
}