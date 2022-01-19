<template>
  <n-button v-bind="props">
    <slot name="default"></slot>
  </n-button>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { useAttrs } from "vue";
export default class Button extends Vue {
  private props = {
    ...useAttrs(),
  };
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
