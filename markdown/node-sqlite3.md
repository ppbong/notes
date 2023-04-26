# node - sqlite3

## Installing

```sh
npm install sqlite3 || yarn add sqlite3
```

```js
var sqlite3 = require('sqlite3')
var sqlite3 = require('sqlite3').verbose() // sets execution mode to verbose to produce long stack traces
```

## Control Flow (execute statements mode)

### `Database#parallelize([callback])` *parallel* default

```js
db.serialize(() => {... db.parallelize(() => {... 查询})}) 
```

### `Database#serialize([callback])` *serialize* scope depth = 1

```js
db.serialize(() => {... db.serialize(() => {... })})
```

## API

### `sqlite3.verbose()`

### `new sqlite3.Database(filename [,mode] [,callback])`

```js
// return a new Database object and autoatically opens the database
db = new sqlite3.Database(':memory:', function(err){})
db = new sqlite3.Database('xxx.sqlite | xxx.db')
// mode = OPEN_READONLY | OPEN_READWRITE | OPEN_CREATE | OPEN_FULLMUTEX | OPEN_URI | OPEN_SHAREDCACHE | OPEN_PRIVATECACHE
// mode default = OPEN_READWRITE | OPEN_CREATE | OPEN_FULLMUTEX
```

## Database API

### `Database#close([callback])` close the database

```js
db.close()
```

### `Database#configure(option, value)`

```js
db.configure('trace', function(sql){})
db.configure('profile', function(sql){})
db.configure('busyTimeout', 1000)
```

### `Database#run(sql [,param,...] [,callback])` not retrieve any result data

```js
db.run("CREATE|INSERT|UPDATE|DELETE", function(err){})
db.run("CREATE|INSERT|UPDATE|DELETE name = ? AND id= ?", 'zhangsan', 2) // or ['zhangsan', 2]
db.run("CREATE|INSERT|UPDATE|DELETE name = $name AND id= $id", {$name:'zhangsan', $id: 2})
```

### `Database#get(sql [,param,...] [,callback])` single row

```js
db.get("SELECT", function(err, row = undefined){ row.column_name })
```

### `Database#all(sql [,param,...] [,callback])` limited rows

```js
db.all("SELECT", function(err, rows = []){})
```

### `Database#each(sql [,param,...] [,callback] [,complete])` unknown rows

```js
db.each("SELECT", function(err, row){}, function(err, num){})
```

### `Database#exec(sql [, callback])` no result rows are retrieved

```js
db.exec(sqls, function(err){})
```

### `Database#prepare(sql [,param,...] [,callback])` retrun statement object

```js
stmt = db.prepare("INSERT INTO test(id,name,address) VALUES (?,?,?)")
```

### `Database#map(sql [, callback])` returns results as an object instead of an array

```js
db.map("SELECT * FROM test", function(err, map){})
```

### `Database#loadExtension(path [, callback])` loads a compiled SQLite extension into the database connection object

### `Database#interrupt()` allows the user to interrupt long-running queries

### Database API 支持链式调用

## Statement API

### `Statement#bind([param, ...] [, callback])` bind param

```js
stmt.bind(1, 'zhangsan', 'hubei', function(err){})
```

### `Statement#reset([callback])` reset the statement

```js
stmt.reset() // resets the row cursor of the statement and preserves the parameter bindings
```

### `Statement#finalize([callback])` finalize the statement

```js
stmt.finalize()
```

### `Statement#run([param, ...] [, callback])` bind parameters and execute the statement

```js
stmt.run(1, 'zhangsan', 'hubei')
```

### `Statement#get([param, ...] [, callback])` run and retrieves the first result row

```js
stmt.get(1, 'zhangsan', 'hubei', function(err, row = undefined){}) 
```

### `Statement#all([param, ...] [, callback])` run and retrieves all result rows

```js
stmt.all(1, 'zhangsan', 'hubei', function(err, rows = []){})
```

### `Statement#each([param,...] [,callback] [,complete])` unknown rows

```js
stmt.each(1, 'zhangsan', 'hubei', function(err, row){})
```

### `Statement#map(sql [, callback])` returns results as an object instead of an array

```js
stmt.map("SELECT * FROM test", function(err, map){})
```

### Statement API 支持链式调用
