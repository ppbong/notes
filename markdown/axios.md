# [axios](https://axios-http.com/)

## Profile

- Promise based HTTP client for the browser and node.js

## Features

- Make XMLHttpRequests from the browser
- Make http requests from node.js
- Supports the Promise API
- Automatic request body serialization to JSON(application/json)、Multipart/FormData(multipart/form-data)、URL-encoded-form (application/x-www-form-urlencoded)

## Installing

### npm

```sh
npm install axios
```

### bower

```sh
bower install axios
```

### yarn

```sh
yarn add axios
```

### jsDelivr

```html
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
```

### unpkg

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### Prebuilt CommonJS modules for direct importing with require

```js
const axios = require('axios/dist/browser/axios.cjs'); // browser
const axios = require('axios/dist/node/axios.cjs');    // node
```

## Example

```js
const axios = require('axios')

// GET
axios.get('/user/ID=12345').then((res) => {}).catch((err) => {}).finally(() => {})
axios.get('/user',{params: {ID:12345}})

// POST
axios.post('/user', {username:'admin', password:'123'}).then((res) => {}).catch((err) => {}).finally(() => {})
axios.post('/user', document.querySelector('#myForm'), {headers: {'Content-Type':'application/json'}}) // 提交表单
axios.post('/user', {username:'admin', photo:document.querySelector('#fileInput').files}, {headers: {'Content-Type':'multipart/form-data'}}) // 上传文件
axios.post('/user', {username:'admin', password:'123'},{headers: {'Content-Type':'application/x-www-form-urlencoded'}})

// async/await
const getUser = async () => {try {const res = await axios.get('/user?ID=12345')} catch(err){}}
const res = await axios.get('/user?ID=12345'); console.log(res.data)
const {data} = await axios.get('/user?ID=12345'); console.log(data)

// performing multiple concurrent requests
const getUserAccount = () => {return axios.get('/user/admin')}
const getUserPermission = () => {return axios.get('user/admin/perm')}
Promise.all([getUserAccount(), getUserPermission()]).then(([acct, perm]) => {})
const [acct, perm] = await Promise.all([getUserAccount(), getUserPermission()])
```

## API

### 原型方法（prototype）

#### axios(config)

```js
axios({method:'post', url:'/user', data:{username:'admin', password: 'Flintstone'}})
axios({method:'get', url:'/user/admin/photo', responseType:'stream'}).then((res) => {res.data.pipe(fs.createWriteStream('admin.jpg'))}) // 下载文件
```

#### axios(url[, config])

```js
axios('/user/12345') // 默认GET
axios('/user/12345', {method:'post', data:{}}) // POST
```

#### axios.request(config)

#### axios.get(url[, config])

#### axios.delete(url[, config])

#### axios.head(url[, config])

#### axios.options(url[, config])

#### axios.post(url[, data[, config]])

#### axios.put(url[, data[, config]])

#### axios.patch(url[, data[, config]])

#### axios.postForm(url[, data[, config]])

#### axios.putForm(url[, data[, config]])

#### axios.patchForm(url[, data[, config]])

#### axios.create([config]) 实例化

```js
const instance = axios.create({baseURL:'https://localhost/api/', timeout:1000, headers:{'X-Custom-Header':'foobar'}});
```

### 实例方法（instance）

#### axios#request(config)

#### axios#get(url[, config])

#### axios#delete(url[, config])

#### axios#head(url[, config])

#### axios#options(url[, config])

#### axios#post(url[, data[, config]])

#### axios#put(url[, data[, config]])

#### axios#patch(url[, data[, config]])

#### axios#getUri([config])

## 请求配置（Request Config）

```js
{
    url: '/user',
    method: 'get', // default
    baseURL: 'https://some-domain.com/api', // `baseURL` will be prepended to `url` unless `url` is absolute.
    // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,FormData or Stream
    transformRequest: [function (data, headers) { return data; }], // only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
    transformResponse: [function (data) { return data; }], //  before it is passed to then/catch
    headers: {'X-Requested-With': 'XMLHttpRequest'},
    params: { ID: 12345 }, // Must be a plain object or a URLSearchParams object, null or undefined are not rendered in the URL.
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function (params) { return Qs.stringify(params, {arrayFormat: 'brackets'}) },
    // type=string|plain object|ArrayBuffer|ArrayBufferView|URLSearchParams|FormData,File,Blob(Browser only)|Stream, Buffer(Node only)
    data: { firstName: 'Fred' }, // method=PUT|POST|DELETE|PATCH
    data: 'Country=Brasil&City=Belo Horizonte', // method=POST, only the value is sent, not the key
    timeout: 1000, // default is `0` milliseconds (no timeout)
    withCredentials: false, // default, indicates whether or not cross-site Access-Control requests should be made using credentials
    adapter: function (config) { }, // Return a promise and supply a valid response (see lib/adapters/README.md).
    auth: { username: 'janedoe', password: 's00pers3cret' },
    responseType: 'json', // default, arraybuffer|document|json|text|stream|blob(browser only)
    responseEncoding: 'utf8', // default
    xsrfCookieName: 'XSRF-TOKEN', // default
    xsrfHeaderName: 'X-XSRF-TOKEN', // default
    onUploadProgress: function (progressEvent) { }, // 上传进度
    onDownloadProgress: function (progressEvent) { }, // 下载进度
    maxContentLength: 2000,
    maxBodyLength: 2000,
    validateStatus: function (status) { return status >= 200 && status < 300; }, // default
    socketPath: null, // default, e.g. '/var/run/docker.sock'
    httpAgent: new http.Agent({ keepAlive: true }), // keepAlive that are not enabled by default.
    httpsAgent: new https.Agent({ keepAlive: true }),
    proxy: { protocol: 'https', host: '127.0.0.1',  port: 9000, auth: { username: 'mikeymike', password: 'rapunz3l' }},
    cancelToken: new CancelToken(function (cancel) { }), // used to cancel the request, deprecated
    decompress: true // default
}
```

## 响应结构（Response Schema）

```js
{
  data: {},
  status: 200,
  statusText: 'OK',
  headers: {},
  config: {}, // the config that was provided to `axios` for the request
  request: {}
}
```

## 默认配置（Config Defaults）

```js
// global
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// instance
axios#defaults.xxx = yyy
```

## 拦截器（Interceptors）

```js
// global
axios.interceptors.request.use((config) => { return config; }, (error) => { return Promise.reject(error); });
axios.interceptors.response.use((response) => { return response; }, (error) => { return Promise.reject(error); });
// instance
axios#interceptors.xxx
```

## 取消请求（Cancellation）

```js
const controller = new AbortController();
axios.get('/foo/bar', { signal: controller.signal }).then(function(response) { });
controller.abort() // cancel the request
```

## 请求体编码（URL-Encoding Bodies）

请求体默认采用json方式，使用x-www-form-urlencoded须通过以下方式处理

```js
// Browser
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
// qs
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
// querystring
const querystring = require('querystring');
axios.post('/foo', querystring.stringify({ foo: 'bar' }));
// URLSearchParams
const url = require('url');
const params = new url.URLSearchParams({ foo: 'bar' });
axios.post('/foo', params.toString());
// form-data
const FormData = require('form-data');
const form = new FormData();
form.append('field', 'value');
form.append('buffer', new Buffer(10));
form.append('my_file', fs.createReadStream('/foo/bar.jpg'));
axios.post('https://example.com', form, { headers: form.getHeaders() })
```
