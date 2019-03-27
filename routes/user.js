const router = require('koa-router')();
const User = require('../models/user');
const bcrypt = require('bcrypt');


router.post('/register', async ctx => {
    const data = ctx.request.body;
    //查找邮箱是否已经注册
    User.findOne({ email: data.email })
        .then(user => {
            if (user) throw new Error('邮箱已注册!');
            //不存在就存入
            const newUser = new User({
                name: data.name,
                email: data.email,
                password: data.password,
                sex: data.sex
            })
            console.log(newUser);
            bcrypt.genSalt(10, function (err, salt) {
                console.log(salt);
                if (err) throw err;
                bcrypt.hash(newUser.password, salt, function (err, hash) {
                    if (err) throw err;
                    console.log(hash);
                });
            });
        })
})

router.get('/:id', (ctx, next) => {
    ctx.body = 'user router'
})


module.exports = router;
