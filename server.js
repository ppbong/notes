const http = require('http')
const port = '3000'

const express = require('express')
const app = express()
app.set('port', port);

const fs = require('fs');
const path = require('path');

// app.use(express.json());
app.use('/static/d3', express.static(path.join(__dirname, 'node_modules/d3')))
app.use('/static/markmap-view', express.static(path.join(__dirname, 'node_modules/markmap-view')))
app.use('/static/markmap-toolbar', express.static(path.join(__dirname, 'node_modules/markmap-toolbar')))
app.use('/static/axios', express.static(path.join(__dirname, 'node_modules/axios')))
app.use('/static/prismjs', express.static(path.join(__dirname, 'node_modules/prismjs')))

const { Transformer } = require('markmap-lib')
const transformer = new Transformer();

const server = http.createServer(app);

server.listen(port);
server.on('error', (err) => { console.log(err) });
server.on('listening', () => { console.log('server listen on ' + port) });

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/' + 'index.html')
})

app.get('/markdown', (req, res) => {
	fs.readdir('markdown', (err, data) => {
		if (err) throw err

		res.send(data)
	})
})

app.get('/markdown/:filename', (req, res) => {
	const filename = req.params.filename

	fs.readFile('markdown/' + filename, 'utf8', (err, data) => {
		if (err) throw err

		const { root, features } = transformer.transform(data)
		res.send(root)
	})
})
