import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 5000;


app.use((req, res, next) => {
	res.setHeader('Content-Security-Policy', "frame-ancestors 'none';");
	res.cookie('sessionId', '1234', {
		httpOnly: true,
		secure: true,
		sameSite: 'strict'
	})
	next();
})

app.use(express.static('public'));




app.get('/iframe1', (req, res) => {
	res.sendFile(__dirname + '/public/iframe1.html')
})

app.get('/iframe2', (req, res) => {
	res.sendFile(__dirname + '/public/iframe2.html')
})

app.listen(PORT, () => {
	console.log('Server started at ' + PORT)
})