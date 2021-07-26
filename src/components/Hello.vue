<template>
  <h1 class="text-2xl font-bold text-center">Hello {{ message }}!</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
});
</script>
