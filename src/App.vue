<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  metaInfo() {
    return {
      title: "Website: %s",
    };
  },
});
</script>
