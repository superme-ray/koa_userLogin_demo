const router = require('koa-router')();


router.get('/articles',c=>{
    c.body = 'articles page'
})


module.exports = router;