<template>
  <div class="login">
    <div class="login-container">
      <div class="login-container-title">MatrixCloud项目管理系统</div>
      <div class="login-container-content">
        <div class="login-container-content-left-col">
          <img :src="require('@/assets/logo.png')" class="logo" />
        </div>
        <div class="login-container-content-right-col">
          <n-form
            ref="formRef"
            label-placement="left"
            size="large"
            :model="formInline"
            :rules="rules"
            class="form"
          >
            <n-form-item path="username" label="用户名" label-width="100">
              <n-input
                v-model:value="formInline.username"
                placeholder="请输入用户名"
              />
            </n-form-item>
            <n-form-item path="password" label="密码" label-width="100">
              <n-input
                v-model:value="formInline.password"
                type="password"
                show-password-toggle
                placeholder="请输入密码"
              />
            </n-form-item>
            <n-form-item
              class="default-color"
              :show-feedback="false"
              label=" "
              label-width="100"
            >
              <div class="flex justify-between">
                <div class="flex-initial">
                  <n-checkbox v-model:checked="autoLogin">保持登录</n-checkbox>
                </div>
              </div>
            </n-form-item>
            <n-form-item label=" " label-width="100" :show-feedback="false">
              <n-button
                type="primary"
                @click="handleSubmit"
                size="large"
                :loading="loading"
              >
                登录
              </n-button>
              <span class="pointer forget-pwd">忘记密码</span>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { login } from "@/api/index";
export default class Login extends Vue {
  private formInline = {
    username: "admin",
    password: "123456",
  };
  private autoLogin: Boolean = true;
  private loading: Boolean = false;
  private handleSubmit() {
    this.$router.replace("/");
    login().then(() => {
      // this.$router.replace("/");
    });
  }
  private cli() {
    console.log(",,");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login {
  height: 100vh;
  position: relative;
  background: #0960bd;
  &-container {
    height: 300px;
    width: 500px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-radius: 3px;
    &-title {
      text-align: center;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #eee;
      font-size: 16px;
      font-weight: 600;
    }
    &-content {
      padding: 15px;
      overflow: hidden;
      &-left-col {
        float: left;
        width: 30%;
        text-align: center;
        .logo {
          width: 80%;
        }
      }
      &-right-col {
        float: left;
        width: 70%;
        .forget-pwd {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
