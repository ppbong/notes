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

#### app.param([name], callback) `对请求参数集的触发处理`

```js
app.parm(['username','password'], (req, res, next, value) => {})
```

#### app.path() `当前应用的访问路径`

```js
test = express(); app.use('/test', test); console.log(test.path())
```

#### app.render(view, [locals], callback) `渲染页面`

```js
app.render('index', {title:'test'}, (err, html) => {})
```

#### app.route(path) `创建路由对象`

```js
app.route('/test').all((req,res,next) => {}).get((req,res,next) => {}).post((req,res,next) => {})
```

#### app.use([path,] callback [, callback...]) `为特定路径挂载中间件`

```js
app.use((req,res,next) => {console.log('Time: %d', Date.now()); next();})
router = express.Router(); router.get('/', (req,res,next) => {}); app.use(router) 
```

### Settings

#### app.get(name) & app.set(name, value) `读取&设置`

#### app.disable(name) & app.disabled(name) `禁用设置&禁用状态`

#### app.enable(name) & app.enabled(name) `启用设置&启用状态`

#### Settings Property

```js
app.set('case sensitive routing', false)   // /Foo same as /foo
app.set('env', 'production | development') // 生产环境|开发环境
app.set('etag', 'weak'|'strong'|true|false|function()') // set the etag response header
app.set('jsonp callback name', 'callback') // specifies the default JSONP callback name
app.set('json escape', true) // will escape the characters <>& as unicode in json avoid XSS attacks
app.set('json replacer', undefined) // used by JSON.stringify
app.set('json spaces', undefined)   // used by JSON.stringify
app.set('query parser', 'extended'|'simple'|false) // querystring | qs | false
app.set('strict routing', false) // /foo same as /foo/
app.set('subdomain offset', 2) // the number of dot-separated
app.set('trust proxy', false) // 可信路由
app.set('views', process.cwd() + '/views') // 一个或多个视图寻址路径
app.set('view cache', true) // in production
app.set('view engine', undefined)
app.set('x-powered-by', true) // enables the "X-Powered-By:Express" HTTP header
```

### Path Pattern

```js
app.use('/abcd', (req, res, next) => {全匹配/abcd}) // 字符方式
app.use('/abc?d', (req, res, next) => {匹配/abcd|/abd})
app.use('/abc+d', (req, res, next) => {匹配/abcd|/abccd|...})
app.use('/abc*d', (req, res, next) => {匹配/abcd|/abcXd|...})
app.use('/a(bc)?d', (req, res, next) => {匹配/ad|/abcd})
app.use(/\/abc|\/xyz/, (req, res, next) => {正则匹配/abc或/xyz}) // 正则表达式
app.use(['/abcd', /\/abc/], (req, res, next) => {混合匹配/abcd|/abc}) // 数组方式
```

## Request

### req Properties

#### req.app 获取应用对象

#### req.baseUrl 请求基址

#### req.body 请求体 default=undefined

```js
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
```

#### req.cookies & req.signedCookies

```js
var cookieParser=require('cookie-parse'); app.use(cookieParser); app.get('/', (req,res)=>{req.cookies;req.signedCookies})
```

#### req.fresh `是否还在刷新`

#### req.hostname `主机名|域名`

#### req.ip

#### req.ips `可信代理时地址集`

#### req.method `请求方式GET|POST|PUT|DELETE等`

#### req.originalUrl `请求完整路径含请求参数`

#### req.params `请求参数`

```js
app.get('/user/:name', (req,res) => {req.params.name})
```

#### req.path `请求相对路径且不含请求参数`

#### req.protocol `请求协议http|https`

#### req.res `响应`

#### req.route `路由详情`

#### req.secure `是否安全连接 https?true:false`

#### req.subdomains `子域名`

#### req.xhr `X-Requested-With === XMLHttpRequest ? true : false`

### req Methods

#### req.accepts(types) `检查访问的资源类型`

#### req.acceptsCharsets(charset [, ...])

#### req.acceptsEncodings(encoding [, ...])

#### req.acceptsLanguages(lang [, ...])

#### req.get(field) `请求头域值`

#### req.is(type) `检查请求内容类型`

## Response

### res Properties

#### res.headersSent `应答头是否已发送`

#### res.locals `本地变量`

### res Methods

#### res.append(field [, value]) `应答头域设置`

#### res.get(field) & res.set(field [, value]) `应答头域读取和设置`

#### res.attachment([filename]) `添加附件`

#### res.cookie(name, value [, options]) `设置cookies`

#### res.req

```js
res.cookie('user', 'admin', {domain, encode, expires, httpOnly, maxAge, path, priority, secure, signed, sameSite})
```

#### res.clearCookie(name [, options]) `删除cookies`

#### res.download(path [, filename] [, options] [, fn]) `文件下载`

```js
options = {maxAge, root, lastModified, headers, dotfiles, acceptRanges, cacheControl, immutable}
res.download('/report-123.pdf', 'report.pdf', (err) => {})
```

#### res.end([data] [, encoding]) `结束响应进程`

```js
res.end(); res.status(404).end();
```

#### res.format(object) `按要求格式化返回数据`

```js
res.format({'text/plain': ()=>{res.send('hey')}, 'text/html': ()=>{res.send('<p>hey</p>')}, 'application/json':()=>{res.send({msg: 'hey'})}, default: ()=>{res.status(406).send('Not Acceptable')}})
```

#### res.json([body]) `返回json数据`

#### res.jsonp([body]) `返回json数据给callback`

#### res.links(links) `提供参考连接`

```js
res.links({ next: 'http://api.example.com/users?page=2', last: 'http://api.example.com/users?page=5' })
```

#### res.location(path) `响应头设置Location参数`

#### res.redirect([status,] path) `重定向`

#### res.render(view [, locals] [, callback]) `页面熏染`

```js
res.render('index', {title:'test'}, (err, html) => {})
```

#### res.send([body]) `sends the HTTP response`

#### res.sendFile(path [, options] [, fn]) `返回文件`

#### res.sendStatus(statusCode) `返回状态码`

#### res.status(code) `设置状态码`

#### res.type(type) `设置类型`

#### res.vary(field) `设置可变域参数`

```js
res.vary('User-Agent').render('docs')
```
