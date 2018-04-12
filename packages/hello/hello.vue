<template>
  <div class="vj-hello">
      hello {{messages}}
  </div>
</template>
<script>
export default {
  data() {
      return {}
  },
  name: "vj-hello",
  props: {
    messages: String
  }
};
</script>