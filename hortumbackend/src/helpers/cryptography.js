
const bcrypt = require('bcrypt');

function encrypt(password){ 
    return bcrypt.hashSync(password, 10);
};

function decrypt(newPassword, hash){
   return bcrypt.compareSync(newPassword, hash);
};

module.exports = { encrypt, decrypt };