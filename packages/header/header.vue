<template>
  <header class="vuj-header" :style="{height,background}">
    <slot></slot>
  </header>
</template>
<script>
export default {
  name: "vuj-header",
  props: {
    height: {
      type: String,
      default: "60px"
    },
    background: {
      type: String
    }
  }
};
</script>
