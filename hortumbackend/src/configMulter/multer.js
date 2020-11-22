const multer = require('multer');
const path = require('path');
const crypto  = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, "..", "..", "uploads"),
    storage: multer.diskStorage({
        destination: (req, file, cb) =>{
            cb(null, path.resolve(__dirname, "..", "..", "uploads"));
        },
        filename: (req, file, cb) => {
            const hash = crypto.randomBytes(16).toString('hex');
            const fileName = `${hash}-${file.originalname}`;
            cb(null, fileName);
        }
    })
}