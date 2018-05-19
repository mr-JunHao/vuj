<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
$theme-color: #00a0e9;
$left-area: 350px;
body,
html {
  height: 100%;
  overflow: hidden;
}
.markdown-body {
  width: 100%;
  max-height: 900px;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 40px;
}
.markdown-body table{
  text-align: center;
}
.vuj-grid .vuj-row{
  margin:10px 0;
}
.header {
  display: flex;
}
.logo {
  color: $theme-color;
  font-size: 30px;
  line-height: 60px;
  width: $left-area;
  text-align: center;
}
.color-block {
  background-color: $theme-color;
  border-radius: 3px;
  min-height: 30px;
  color: #fff;
  text-align: center;
  line-height: 30px;
}

</style>

