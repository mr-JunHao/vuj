# {{name}} 栅格
> 24列分栏、容器: vuj-grid、行：vuj-row、列：vuj-col-{$size}-{$num}

## size
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| xs  | <768px  响应式栅格数    | string   | - | -|
| sm  | ≥768px  响应式栅格数    | string   | - | -|
| md  | ≥992px  响应式栅格数    | string   | - | -|
| lg  | ≥1200px  响应式栅格数    | string   | - | -|
| xl  | ≥1920px  响应式栅格数    | string   | - | -|

## num 
#### 0-24列数
#### 其中0为display:none，隐藏列，
#### 1-24：百分比宽度。

## 基础使用
<div class="vuj-grid">
  <div class="vuj-row">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-13"><div class="color-block"></div></div>
    <div class="vuj-col-3"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
  </div>
</div>
<open-code :open="false">

```html
<div class="vuj-grid">
  <div class="vuj-row">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-13"><div class="color-block"></div></div>
    <div class="vuj-col-3"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
  </div>
</div>
```

</open-code>

## 无间隔列
no-gutters可以清除当前元素padding间隔，还能清除子级col的间隔
<div class="vuj-grid no-gutters">
  <div class="vuj-row">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-13"><div class="color-block"></div></div>
    <div class="vuj-col-3"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
  </div>
</div>
<open-code :open="false">

```html
<div class="vuj-grid no-gutters">
  <div class="vuj-row">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-13"><div class="color-block"></div></div>
    <div class="vuj-col-3"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
  </div>
</div>
```

</open-code>

## 列左侧的间隔偏移
vuj-col-offset-${num}。num偏移值与列的值对应。
<div class="vuj-grid">
  <div class="vuj-row">
    <div class="vuj-col-2 vuj-col-offset-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4 vuj-col-offset-4"><div class="color-block"></div></div>
    <div class="vuj-col-4 vuj-col-offset-2"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6 vuj-col-offset-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-3 vuj-col-offset-3"><div class="color-block"></div></div>
  </div>
</div>

<open-code>

```html
<div class="vuj-grid">
  <div class="vuj-row">
    <div class="vuj-col-2 vuj-col-offset-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4 vuj-col-offset-4"><div class="color-block"></div></div>
    <div class="vuj-col-4 vuj-col-offset-2"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6 vuj-col-offset-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-3 vuj-col-offset-3"><div class="color-block"></div></div>
  </div>
</div>
```

</open-code>

## 单列（左|右）移动列数
vuj-col-pull-2: 表示从右往左移动2列。<br>
vuj-col-push-2: 表示从左往右移动2列。
<div class="vuj-grid">
  <div class="vuj-row">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4 vuj-col-pull-2"><div class="color-block">pull</div></div>
     <div class="vuj-col-4 vuj-col-push-2"><div class="color-block">push</div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6 vuj-col-push-14"><div class="color-block">push</div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
  </div>
</div>

<open-code>

```html
<div class="vuj-grid">
  <div class="vuj-row">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4 vuj-col-pull-2"><div class="color-block"></div></div>
     <div class="vuj-col-4 vuj-col-push-2"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row">
    <div class="vuj-col-6 vuj-col-push-14"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
  </div>
</div>
```

</open-code>



## 使用flex栅格
在vuj-col上一级父级设置mode=flex。<br>
交叉轴对齐方式align-items:  flex-start | flex-end | center | baseline | stretch;<br>
主轴上的对齐方式justify-content:flex-start | flex-end | center | space-between | space-around;
> align-items、justify-content。只有设置了mode=flex才生效
#### 
<div class="vuj-grid">
  <div class="vuj-row" style="height:40px" mode="flex" align-items="center" justify-content="space-between">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row" mode="flex" justify-content="space-around">
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-3"><div class="color-block"></div></div>
  </div>
</div>

<open-code>

```html
<div class="vuj-grid">
  <div class="vuj-row" style="height:40px" mode="flex" align-items="center" justify-content="space-between">
    <div class="vuj-col-2"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-4"><div class="color-block"></div></div>
    <div class="vuj-col-2"><div class="color-block"></div></div>
  </div>
  <div class="vuj-row" mode="flex" justify-content="space-around">
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-6"><div class="color-block"></div></div>
    <div class="vuj-col-3"><div class="color-block"></div></div>
  </div>
</div>
```

</open-code>


<script>
import openCode from 'docs/tmp/open-code';
export default {
  name: 'grid',
  data(){
    return {
      name: 'grid'
    }
  },
  components: {
    [openCode.name]: openCode
  }
}
</script>