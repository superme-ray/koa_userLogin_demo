const router  = require('koa-router')();
const userRoute = require('./user');
const articleRoute = require('./article');


router.use('/user',userRoute.routes());
router.use('/book',articleRoute.routes());

module.exports = router;