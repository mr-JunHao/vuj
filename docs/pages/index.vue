<template>
  <vuj-container class="overhide" direction="vertical">
    <doc-hd></doc-hd>
    <vuj-container>
      <vuj-aside width="350px">
        <vuj-menu>
          <vuj-menu-item>
            22
          </vuj-menu-item>
        </vuj-menu>
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
import menu from "packages/menu";
import menuItem from "packages/menu-item";
import subMenu from "packages/sub-menu";
export default {
  data() {
    return {
      name: "vuj"
    };
  },
  components: {
    [docHd.name]: docHd,
    [grid.name]: grid,
    [menu.name]: menu,
    [menuItem.name]: menuItem,
    [subMenu.name]: subMenu
  }
};
</script>
<style lang="scss" scoped>
.overhide {
  height: 100%;
}
</style>
