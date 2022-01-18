<template>
  <n-button @click="about">about</n-button>
  <n-collapse>
    <n-collapse-item title="青铜" name="1">
      <div>可以</div>
    </n-collapse-item>
    <n-collapse-item title="白银" name="2">
      <div>很好</div>
    </n-collapse-item>
    <n-collapse-item title="黄金" name="3">
      <div>真棒</div>
    </n-collapse-item>
  </n-collapse>
  <div class="aaa">{{ a }}</div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  mounted(): void {
    console.log(this.msg);
    // console.log(this.a);
  }
  about(): void {
    this.$router.push("/about");
  }
  setup(): unknown {
    return {
      a: "xx",
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
