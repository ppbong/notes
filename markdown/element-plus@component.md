# element-plus@component

## Basic

### Layout Container

#### `<el-container direction="vertical|horizontal">`
- 含 `el-header` 或 `el-footer` 时 'vertical' 其他 'horizontal'

#### `<el-header height="60px">`
- 默认高度60

#### `<el-aside width="300px">`
- 默认宽度300

#### `<el-main>`

#### `<el-footer height="60px">`
- 默认高度60

### Layout Grid-24-Flex

#### `<el-row :gutter="0" justify="start" align="top" tag="div">`
- 默认列间隔0，左对齐，垂直居上，元素标签'div'
- 水平分布 `justify` = 'start' | 'center' | 'end' | 'space-between'两端 | 'space-around'两端缩进 | 'space-evenly'等间距
- 垂直分布 `align` = 'top' | 'middle' | 'bottom'

#### `<el-col :span="24" :offset="0">`
- 适应性布局（Responsive Layout）属性 `xs|sm|md|lg|xl`分别设定<768px|>=768px|>=992px|>=1200px|>=1920px时占列数

### Color

#### Main Color
- `#409EFF`<span style="background-color:#409EFF"> Brand Color</span>
- `#337ECC`<span style="background-color:#337ECC"> var(--el-color-primary-dark-2)</span>
- `#79BBFF`<span style="background-color:#79BBFF"> var(--el-color-primary-light-3)</span>
- `#A0CFFF`<span style="background-color:#A0CFFF"> var(--el-color-primary-light-5)</span>
- `#C6E2FF`<span style="background-color:#C6E2FF"> var(--el-color-primary-light-7)</span>
- `#D9ECFF`<span style="background-color:#D9ECFF"> var(--el-color-primary-light-8)</span>
- `#ECF5FF`<span style="background-color:#ECF5FF"> var(--el-color-primary-light-9)</span>

#### Secondary Color
- `#67C23A`<span style="background-color:#67C23A"> Success</span>
- `#529B2E`<span style="background-color:#529B2E"> var(--el-color-success-dark-2)</span>
- `#95D475`<span style="background-color:#95D475"> var(--el-color-success-light-3)</span>
- `#B3E19D`<span style="background-color:#B3E19D"> var(--el-color-success-light-5)</span>
- `#D1EDC4`<span style="background-color:#D1EDC4"> var(--el-color-success-light-7)</span>
- `#E1F3D8`<span style="background-color:#E1F3D8"> var(--el-color-success-light-8)</span>
- `#F0F9EB`<span style="background-color:#F0F9EB"> var(--el-color-success-light-9)</span>

- `#E6A23C`<span style="background-color:#E6A23C"> Warning</span>
- `#B88230`<span style="background-color:#B88230"> var(--el-color-warning-dark-2)</span>
- `#EEBE77`<span style="background-color:#EEBE77"> var(--el-color-warning-light-3)</span>
- `#F3D19E`<span style="background-color:#F3D19E"> var(--el-color-warning-light-5)</span>
- `#F8E3C5`<span style="background-color:#F8E3C5"> var(--el-color-warning-light-7)</span>
- `#FAECD8`<span style="background-color:#FAECD8"> var(--el-color-warning-light-8)</span>
- `#FDF6EC`<span style="background-color:#FDF6EC"> var(--el-color-warning-light-9)</span>

- `#F56C6C`<span style="background-color:#F56C6C"> Danger</span>
- `#C45656`<span style="background-color:#C45656"> var(--el-color-danger-dark-2)</span>
- `#F89898`<span style="background-color:#F89898"> var(--el-color-danger-light-3)</span>
- `#FAB6B6`<span style="background-color:#FAB6B6"> var(--el-color-danger-light-5)</span>
- `#FCD3D3`<span style="background-color:#FCD3D3"> var(--el-color-danger-light-7)</span>
- `#FDE2E2`<span style="background-color:#FDE2E2"> var(--el-color-danger-light-8)</span>
- `#FEF0F0`<span style="background-color:#FEF0F0"> var(--el-color-danger-light-9)</span>

- `#909399`<span style="background-color:#909399"> Info</span>
- `#73767A`<span style="background-color:#73767A"> var(--el-color-info-dark-2)</span>
- `#B1B3B8`<span style="background-color:#B1B3B8"> var(--el-color-info-light-3)</span>
- `#C8C9CC`<span style="background-color:#C8C9CC"> var(--el-color-info-light-5)</span>
- `#DEDFE0`<span style="background-color:#DEDFE0"> var(--el-color-info-light-7)</span>
- `#E9E9EB`<span style="background-color:#E9E9EB"> var(--el-color-info-light-8)</span>
- `#F4F4F5`<span style="background-color:#F4F4F5"> var(--el-color-info-light-9)</span>

#### Neutral Color
- `#303133`<span style="background-color:#303133"> Primary Text</span>
- `#606266`<span style="background-color:#606266"> Regular Text</span>
- `#909399`<span style="background-color:#909399"> Secondary Text</span>
- `#A8ABB2`<span style="background-color:#A8ABB2"> Placeholder Text</span>
- `#C0C4CC`<span style="background-color:#C0C4CC"> Disabled Text</span>

- `#CDD0D6`<span style="background-color:#CDD0D6"> Darker Border</span>
- `#D4D7DE`<span style="background-color:#D4D7DE"> Dark Border</span>
- `#DCDFE6`<span style="background-color:#DCDFE6"> Base Border</span>
- `#E4E7ED`<span style="background-color:#E4E7ED"> Light Border</span>
- `#EBEEF5`<span style="background-color:#EBEEF5"> Lighter Border</span>
- `#F2F6FC`<span style="background-color:#F2F6FC"> Extra-light Border</span>

- `#E6E8EB`<span style="background-color:#E6E8EB"> Darker Fill</span>
- `#EBEDF0`<span style="background-color:#EBEDF0"> Dark Fill</span>
- `#F0F2F5`<span style="background-color:#F0F2F5"> Base Fill</span>
- `#F5F7FA`<span style="background-color:#F5F7FA"> Light Fill</span>
- `#FAFAFA`<span style="background-color:#FAFAFA"> Lighter Fill</span>
- `#FAFCFF`<span style="background-color:#FAFCFF"> Extra-light Fill</span>
- `#FFFFFF`<span style="background-color:#FFFFFF"> Blank Fill</span>

- `#000000`<span style="background-color:#CDD0D6"> Basic Black</span>
- `#FFFFFF`<span style="background-color:#FFFFFF"> Basic White / Base Background / Overlay Background</span>
- `transparent`<span style="background-color:transparent"> Transparent</span>
- `#F2F3F5`<span style="background-color:#F2F3F5"> Page Background</span>

### Icon

#### `<el-icon :size="20" color="#409EFX">`
- 尺寸和颜色默认继承`font-size`和`color`

### Button

#### `<el-button type="primary" :size="default" :icon="Edit" plain round>`
- 色调 `type` = 'primary' | 'success' | 'warning' | 'danger'| 'info'
- 尺寸 `size` = 'large' | 'default' | 'small' | 数值
- 图标 `icon` = 路径 | 组件，默认左侧，右侧图标可通过嵌入`<el-icon>`子元素实现
- 风格 `plain` = 平整 `round` = 圆角 `circle` = 圆形 `text` = 文本 `link` = 链接
- 加载 `loading` = 加载中 `loading-icon` = 加载中图标
- 禁用 `disabled`
- 原始类型 `native-type` = 'button'默认 | 'submit' | 'reset'
- Slots槽 `#loading` 和 `#icon`