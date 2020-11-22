const knex = require('../database/connection');

module.exports = {
    async index(req, res) {
        const page = Number(req.query.page);
        const limit = 10;

        const jump = (page - 1) * limit;

        try {
            const result = await knex('users')
                .join('postimages', 'users.id', '=', 'postimages.user_id')
                .select('users.name', 'postimages.id', 'postimages.like')
                .orderBy('like', 'desc')
                .limit(limit)
                .offset(jump);

            const [numberOfRecords] = await knex('postimages').count('id as id');

            const numberPage = Math.ceil(numberOfRecords.id / 10);

            return res.json({ result, numberPage });

        } catch (error) {
            console.log(error);
            return res.json({ massage: 'Você não possui autorização, tente realizar login novamente' });
        }
    }
}