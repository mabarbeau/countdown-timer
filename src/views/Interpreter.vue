<template>
  <div>
    Interpreter
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Interpreter",
  props: {
    duration: {
      type: String,
      default: null
    }
  },
  beforeRouteEnter() {
    return true;
  }
});
</script>
