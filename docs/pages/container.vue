<template>
  <vuj-container class="overhide" direction="vertical">
    <doc-hd></doc-hd>
    <vuj-container>
      <vuj-aside width="350px">
        <div class="color-block">aside</div>
      </vuj-aside>
      <div class="markdown-body">
        <div class="vuj-grid">
        <div class="vuj-row">
            <div class="vuj-col-md-20">
              <grid></grid>
            </div>
          </div>
        </div>
      </div>
    </vuj-container>
    <!-- <vuj-footer></vuj-footer> -->
  </vuj-container>
</template>
<script>
import docHd from "docs/tmp/hd";
import grid from "docs/markdown/grid.md";
export default {
  data() {
    return {
      name: "vuj"
    };
  },
  components: {
    [docHd.name]: docHd,
    [grid.name]: grid
  }
};
</script>
<style lang="scss" scoped>

.overhide{
  height: 100%;
}
</style>
