<template>
  <div class="vuj-hello">
    <p class="vuj-hello__messages">
      hello {{messages}}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "vuj-hello",
  props: {
    messages: String
  }
};
</script>