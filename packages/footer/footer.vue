<template>
  <footer class="vuj-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
  export default {
    name: 'vuj-footer',
    props: {
      height: {
        type: String,
        default: '60px'
      }
    }
  };
</script>