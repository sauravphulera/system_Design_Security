import express from "express"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

const PORT = 5010;


app.use(express.static('public'));


app.get('/example1', (req, res) => {
	res.sendFile(__dirname + '/public/example1.html')
})

app.get('/example2', (req, res) => {
	res.sendFile(__dirname + '/public/example2.html')
})

app.listen(PORT, () => {
	console.log('Server started at ' + PORT)
})