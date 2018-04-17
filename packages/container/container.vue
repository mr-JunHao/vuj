<template>
  <section class="vuj-container" :class="{ 'is-vertical': isVertical }" :style="transformStyle">
    <slot></slot>
  </section>
</template>
<script>
export default {
  name: "vuj-container",
  props: {
    direction: String,
    addStyle: {
      type: [String, Object]
    }
  },
  computed: {
    transformStyle() {
      let styles = this.addStyle;

      if (styles && styles.indexOf("{") > -1) {
        return styles = styles
          .replace(/^\{|\}$/gi, "")
          .replace(/\s*/g, "")
          .replace(/\,/g, ";");
      }
      return styles;
    },
    isVertical() {
      if (this.direction === "vertical") {
        return true;
      } else if (this.direction === "horizontal") {
        return false;
      }
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === "vuj-header" || tag === "vuj-footer";
          })
        : false;
    }
  }
};
</script>
