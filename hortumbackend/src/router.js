const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('./configMulter/multer');
const { verifyToken } = require('./helpers/jwt');

const UserController = require('./controllers/UserController');
const GardenController = require('./controllers/GardenController');
const PostImagesController = require('./controllers/PostImagesController');
const RankingController = require('./controllers/RankingController');
const ImageGardenController = require('./controllers/ImageGardenController');

router.post('/register', UserController.create);
router.post('/login', UserController.login);
router.post('/creategarden/:id', verifyToken, GardenController.create);
router.delete('/deletegarden/:id', verifyToken, GardenController.delete);
router.get('/listgarden', verifyToken, GardenController.index);
router.post('/sendimage', verifyToken, multer(multerConfig).single('file'), PostImagesController.create);
router.get('/indeximage', verifyToken, PostImagesController.index);
router.put('/likeimage/:id', verifyToken, PostImagesController.likesUpdate);
router.get('/listranking', verifyToken, RankingController.index);
router.get('/listimagegarden', verifyToken, ImageGardenController.index);

module.exports = router;