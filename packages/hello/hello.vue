<template>
  <div class="vj-hello">
    <p class="vj-hello__messages">
      hello {{messages}}
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "vj-hello",
  props: {
    messages: String
  }
};
</script>