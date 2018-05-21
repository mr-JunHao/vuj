<template>
  <ul class="vuj-menu" 
    :class="{
      'vuj-menu--horizontal': mode === 'horizontal'
    }">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  name: 'vuj-menu',
  props: {
    mode: {
      type: String,
      default: 'vertical'
    }
  },
  data(){
    return {}
  }
}
</script>


