# hello
**Hello 组件**

### 基本用法

# 11
​```js 
import {Hello} from 'vuj';
export defalut {
  components: {
    [Hello.name]: Hello
  }
}

​```

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| message  | 文本信息    | string   | — | — |
### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| click  | 点击操作    | — |