<template>
  <div class="logo">
    <img src="@/assets/logo.png" />
    <h3 v-show="!collapsed" class="title">Pangud</h3>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";
export default class Logo extends Vue {
  @Prop({ type: Boolean, default: false })
  private collapsed!: boolean;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  line-height: 64px;
  overflow: hidden;
  white-space: nowrap;
  img {
    width: auto;
    height: 32px;
  }
  & .title {
    color: #fff;
    margin: 0;
  }
}
</style>
