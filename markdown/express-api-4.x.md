# [ExpressJS API 4.x](https://expressjs.com/en/4x/api.html)

## express()

```js
var express = require('express');
var app = express();
```

## express方法

### express.json([options]) `JSON格式请求体解析（基于body-parser）`

```js
options = {inflate:true, limit:'100kb', reviver:null, strict:true, type:'application/json', verify:undefined}
```

### express.raw([options]) `Buffer格式请求体解析（基于body-parser）`

```js
options = {inflate:true, limit:'100kb', type:'application/octet-stream', verify:undefined}
```

### express.text([options]) `String格式请求体解析（基于body-parser）`

```js
options = {defaultCharset:'utf-8', inflate:true, limit:'100kb', type:'text/plain', verify:undefined}
```

### express.urlencoded([options]) `URL-Encoded格式请求体解析（基于body-parser）`

```js
options = {extended:true, infalte:true, limit:'100kb', prameterLimit:1000, type:'application/x-www-form-urlencoded', verify:undefined} // extended ? qs : querystring
```

### express.Router([options]) `创建路由对象`

```js
var router = express.Router([options]);
options = {caseSensitive:false, mergeParams:false, strict:false}
```

### express.static(root, [options]) `服务静态文件（基于serve-static）`

```js
express.static('public');
options = {dotfiles:'ignore|allow|deny', etag:true, extensions:false, fallthrough:true, immutable:false, index:'index.html', lastModified:true, maxAge:0, redirect:true, setHeaders: undefined}
```

## application

### Properties

#### app.locals

```js
app.locals.title='标题'; app.locals.email='admin@xxx.com'; app.locals.strftime=require('strftime'); // will be available in templates rendered with res.render.
```

#### app.mountpath

```js
var admin=expess(); admin.get('/', ()=>{admin.mountpath}); // 子应用挂载路径
var app=express(); app.use('/admin', admin); // 挂载子应用
```

### Events

#### app.on('mount', callback(parent)) `子应用挂载成功后执行的回调`

```js
admin.on('mount', (parent)=>{})
```

### Methods

#### app.listen(path, [callback]) `监听socket`

```js
app.listen('/tmp/sock')
```

#### app.listen([port[, host[, backlog]]][, callback]) `监听port`

```js
app.listen(3000);
var http=require('http'); http.createServer(app).listen(80);
var https=require('https'); https.createServer(options, app).listen(443)
```

#### app.all(path, callback [, callback ...]) `处理所有GET|POST|PUT|DELETE等请求`

```js
app.all('*', requireAuthentication, loadUser); 
app.all('*', requireAuthentication); app.all('*', loadUser)
```

#### app.METHOD(path, callback [, callback ...]) `处理相应请求GET|POST|PUT|DELETE等`

```js
app.get('/user', (req, res) => {});
app.post('/user', (req, res) => {});
app.put('/user', (req, res) => {});
app.delete('/user', (req, res) => {})
```

#### app.engine(ext, callback) `注册模板引擎`

```js
app.engine('pug', require('pug').__expess);
app.engine('html', require('ejs').renderFile)
```

### Settings

#### app.get(name) & app.set(name, value) `读取&设置`

#### app.disable(name) & app.disabled(name) `禁用设置&禁用状态`

#### app.enable(name) & app.enabled(name) `启用设置&启用状态`
