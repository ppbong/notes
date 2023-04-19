# [hiprint](http://hiprint.io/)

## 初始化

```js
hiprint.init()
```

## 模板对象

```js
var hiprintTemplate = new hiprint.PrintTemplate() // 空模板
var hiprintTemplate = new hiprint.PrintTemplate({ template/*json格式模板*/, settingContainer:'#selector'/*模板设置组件使用的HTML容器*/, fields: [{field:'',text:''}]/*元素字段数据源，优先级低于元素类型数据源，fields?下拉框:输入框*/, })
```

## 模板操作

### 新增面板

```js
hiprintTemplate.addPrintPanel({width,height,paperHeader,paperFooter})
```

### 设置元素字段数据源

```js
hiprintTemplate.setFileds([{field:'',text:''}])
```

### 当前纸张方向

```js
hiprintTemplate.getOrient() // 1纵向、2横向
```

### 改变纸张方向

```js
hiprintTemplate.rotatePaper()
```

### 当前打印样式

```js
hiprintTemplate.getPrintStyle(panelIndex=0) // {border,padding,margin,size}
```

### 当前纸张类型

```js
hiprintTemplate.getPaperType(panelIndex=0) // A3|A4|A5|B3|B4|B5|undefined
```

### 清空模板

```js
hiprintTemplate.clear()
```

### 模板格式数据（非配置型）

```js
hiprintTemplate.getJson()
```

### 模板格式数据（配置型）

```js
hiprintTemplate.getJsonTid()
```

### 模板格式预览

```js
hiprintTemplate.design('#selector') // 预览使用的HTML容器
```

### 模板渲染数据（HTML格式）

```js
hiprintTemplate.getHtml(data, {leftOffset,topOffset/*位置偏移（pt）*/, pagerNumberToggleInEven:true/*偶数页页码是否对称*/, })
```

### 模板打印数据（HTML格式）

```js
hiprintTemplate.printByHtml($('#selector').html()) // 打印已渲染数据
```

### 模板打印数据（含预览）

```js
hiprintTemplate.print(data, {leftOffset,topOffset/*位置偏移（pt）*/, pagerNumberToggleInEven:true/*偶数页页码是否对称*/, })
```

### 模板打印数据（无预览）

```js
hiprintTemplate.print2(data, {leftOffset,topOffset/*位置偏移（pt）*/, pagerNumberToggleInEven:true/*偶数页页码是否对称*/, }) // 须下载windows/mac/linux对应平台软件来支持
```

### 直接导出文件（PDF格式）

```js
hiprintTemplate.toPdf(data, filename, {leftOffset,topOffset/*位置偏移（pt）*/, pagerNumberToggleInEven:true/*偶数页页码是否对称*/, scale:2/*缩放尺寸，影响清晰度*/, })
```

### 打印事件回调

```js
hiprintTemplate.on('printSuccess | printError', function(data){})
```

### 本地打印机列表（不可用）

```js
hiprintTemplate.getPrinterList() // 须下载windows/mac/linux对应平台软件来支持
```

### 面板内查找元素

```js
hiprintTemplate.getElementByName(name, panelIndex=0) // []
```

## 面板对象

```js
var panel = hiprintTemplate.addPrintPanel() // 默认面板（A4=210mm*297mm）
var panel = hiprintTemplate.addPrintPanel({width,height,paperType:'A4', paperHeader,paperFooter/*页眉线和页尾线位置（pt）*/, paperNumberLeft,paperNumberTop/*页码位置（pt）*/, paperNumberDisabled/*是否禁用页码*/, rotate/*是否旋转，改变纵向横向*/, })
```

## 面板元素

### 文本

```js
panel.addPrintText({options:{width,height,top,left,title,textAlign:'center'}}) // 位置（pt）
```

### 条形码

```js
panel.addPrintText({options:{width,height,top,left,title,textType:'barcode'}}) // 位置（pt）
```

### 二维码

```js
panel.addPrintText({options:{width,height,top,left,title,textType:'qrcode'}}) // 位置（pt）
```

### 长文本

```js
panel.addPrintLongText({options:{width,height,top,left,title}}) // 位置（pt）
```

### 表格

```js
panel.addPrintTable({options:{width,height,top,left,content:$('#testTable').html()}}) // 位置（pt）
```

### HTML

```js
panel.addPrintHtml({options:{width,height,top,left,content:$('selector').html()}}) // 位置（pt）
```

### 竖线

```js
panel.addPrintVline({options:{height,top,left}}) // 位置（pt）
```

### 横线

```js
panel.addPrintHline({options:{width,top,left}}) // 位置（pt）
```

### 矩形

```js
panel.addPrintRect({options:{width,height,top,left}}) // 位置（pt）
```
