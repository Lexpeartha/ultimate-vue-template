<template>
  <div>
    <Hello message="template" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHead } from "@vueuse/head";

export default defineComponent({
  setup() {
    useHead({
      title: "Ultimate Vue Template",
    });
  },
});
</script>

<route>
{
  "name": "HomePage"
}
</route>
