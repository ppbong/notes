# ExpressJS

## 安装模块

```sh
npm install express --save
```

## 使用脚手架创建项目

```sh
# 默认view=pug
npx express-generator
# 指定view=ejs
npx express-generator --view=ejs
# 指定项目名称
npx express-generator --view=ejs {project_name}
```

```sh
# 安装依赖
npm install
# 启动项目
DEBUG={project_name}:* npm start
```

## Example

```js
// node app.js
const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => { res.send('Hello World!') })
app.listen(port, () => { console.log(`Example app listening on port ${port}`) })
```

## Basic routing

```js
// app.METHOD(path, handler)
app.get('/', (req, res) => { res.send('Hello World!') })
app.post('/', (req, res) => { res.send('Got a POST request') })
app.put('/user', (req, res) => { res.send('Got a PUT request at /user') })
app.delete('/user', (req, res) => { res.send('Got a DELETE request at /user') })
```

## Serving static files in Express

```js
// express.static(root, [options])
app.use(express.static('public')) // /xxx
app.use('/static', express.static('public')) // /static/xxx
const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))
```
