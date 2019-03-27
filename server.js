
const Koa = require('koa');
const port = process.env.PORT || 3000;
const morgan = require('koa-morgan');
const app = new Koa();
const router = require('./routes');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ibook', { useNewUrlParser: true })
	.then(() => console.log('mongodb connected'))
	.catch(err => { throw err });



app.use(bodyParser());
app.use(morgan('combined'))
app.use(router.routes());

app.listen(port, async () => {
	console.log('server is running at port ' + port)
})
