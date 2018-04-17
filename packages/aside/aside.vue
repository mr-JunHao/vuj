<template>
  <aside class="vuj-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'vuj-aside',
    props: {
      width: {
        type: String,
        default: '300px'
      }
    }
  };
</script>