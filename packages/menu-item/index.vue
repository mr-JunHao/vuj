<template>
  <div class="vuj-menu-item" :class="{
    "is-curr": isActive
  }">
      <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'vuj-menu-item',
  props: {
    isActive: Boolean,
    default: false
  },
  data(){
    return {}
  }
}
</script>

