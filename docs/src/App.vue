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
  pre{
    background: #282c34;
  }
  h1,h2,h3,h4{
    font-weight: normal;
    border-bottom: none;
  }
  table{
    text-align: center;
    display: table;
    th{
       font-weight: normal;
    }
    tr{
      border-top: 1px solid #eee;
    }
    th,td{
      border: none;
      padding: 15px;
      max-width: 250px;
    }
  }
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

