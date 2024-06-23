import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { title } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 5000;


//const redirectToHttps = (req, res, next) => {

//	if (req.headers['x-forward-proto'] != 'https')
//		return res.redirect(['https://', req.get('Host'), req.url].join(''));

//	next();
//}

//app.use(redirectToHttps);

app.use((req, res, next) => {
	res.removeHeader('X-Powered-By');
	//res.setHeader('Referrer-Policy', 'origin')
	res.setHeader('X-Content-Type', 'nosniff'); // do not change content type

	res.setHeader('Strict-Transport-Security', 'max-age=3153600; includeSubDomeains; preload')
	next();
})
app.get('/list', (req, res) => {
	res.send({
		id: 1,
		title: "Senior Front end Developer"
	})
})


app.listen(PORT, () => {
	console.log('Server started at ' + PORT)
})