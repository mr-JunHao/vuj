<template>
  <div class="code-fold" :class="status ? 'code-fold__open' : 'code-fold__close'">
    <slot></slot>
    <div class="open-code" @click="openCode"></div>
  </div>
</template>

<script>
export default {
  name: "open-code",
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      status: false
    };
  },
  created(){
    this.status = this.open;
  },
  methods: {
    openCode(){
      this.status = !this.status;
    }
  }
};
</script>

<style lang="scss" scoped>
$theme-color: #00a0e9;

.code-fold {
  position: relative;
  &__close{
    height: 160px;
    overflow: hidden;
  }
  &__open {
    // overflow: auto;
    .open-code {
      &::before {
        border-color: transparent transparent $theme-color transparent !important;
      }
    }
  }
  .open-code {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
    height: 30px;
    background: linear-gradient(
      rgba(0, 160, 233, 0),
      rgba(0, 0, 0, 1)
    );
    cursor: pointer;
    &::before {
      position: absolute;
      bottom: 10px;
      left: 50%;
      margin-left: -6px;
      width: 12px;
      height: 12px;
      content: "";
      display: block;
      border-width: 6px;
      border-style: solid;
      border-color: $theme-color transparent transparent transparent;
      box-sizing: border-box;
    }
  }
}
</style>

