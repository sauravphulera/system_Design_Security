import express from "express"

const app = express();

const PORT = 3010;

// middleware
app.use((req, res, next) => {
	console.log('hey')
	res.setHeader(
		'Content-Security-Policy', "default-src 'self';" +
	"script-src 'self' 'nonce-randomKey' 'unsafe-inline'; report-to default"
	)
	console.log('hey')
	next();
})

app.use(express.static('public'));



app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
	console.log('Server started at ' + PORT)
})