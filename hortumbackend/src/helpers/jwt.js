require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;

function generateToken(password, id){
    return jwt.sign({password, id}, secret, {expiresIn: '1h'});
    
}

function verifyToken (req, res, next){
    const token = req.headers['x-access-token'];
    if(!token) res.status(401);
    
    
    return jwt.verify(token, secret, (err, decoded) => {
        if (err) return res.json({message: 'Você não possui autorização, tente realizar login novamente' });

        req.userId = decoded.id;
        next();
    });
}

module.exports = { generateToken, verifyToken };