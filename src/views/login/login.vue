<template>
  <div class="loginClass">
    <div class="upper" :style="{ height: Show.Started ? '0' : '45vh' }">
      <transition name="fade" mode="out-in">
        <var-image
          width="25vw"
          height="25vw"
          fit="cover"
          radius="50%"
          src="https://akiimage-1314209857.cos.ap-guangzhou.myqcloud.com/image/pixiv/202307031804218.png"
          v-if="!Show.Started"
        />
      </transition>
    </div>
    <div class="below" :style="{ height: Show.Started ? '100vh' : '55vh' }">
      <div>
        <div
          class="below_title"
          :style="{ fontSize: Show.Started ? '4.5vw' : '6vw' }"
        >
          <var-image
            width="5vw"
            height="5vw"
            fit="cover"
            radius="50%"
            src="https://akiimage-1314209857.cos.ap-guangzhou.myqcloud.com/image/pixiv/202307031804218.png"
            :style="{
              opacity: Show.delayed ? '1' : '0',
              width: Show.delayed ? '5vw' : '0',
              transition: 'all 1s',
            }"
            style="margin-right: 2vw"
          />
          <span>舰舰的奇妙见闻</span>
        </div>
        <div class="below_subtitle">纵使日薄西山，愿君相依为伴</div>
      </div>
      <var-form
        ref="formRef"
        class="formClass"
        :style="{
          opacity: Show.delayed ? '1' : '0',
          height: Show.delayed ? 'auto' : '0',
        }"
        scroll-to-error="start"
      >
        <var-space direction="column" :size="[14, 0]">
          <div class="title">登陆名</div>
          <var-input
            variant="outlined"
            placeholder="请输入登陆名"
            :rules="[(v) => !!v || '登陆名不能为空']"
            v-model="Form.name"
            clearable
          />
        </var-space>
        <var-space direction="column" :size="[14, 0]">
          <div class="title">密码</div>
          <var-input
            type="password"
            variant="outlined"
            placeholder="请输入密码"
            :rules="[(v) => !!v || '密码不能为空']"
            v-model="Form.password"
            clearable
          />
        </var-space>
        <VarButton
          size="large"
          type="info"
          style="margin-bottom: 2vh"
          block
          @click="onLogin"
          :loading="Load.btn"
          >{{ login }}</VarButton
        >
        <var-divider description="or" style="margin-bottom: 2vh" />
        <VarButton outline text size="large" style="margin-bottom: 2vh" block>
          <QqOutlined class="font-icon" />
          QQ登录
        </VarButton>
        <VarButton outline text size="large" style="margin-bottom: 2vh" block>
          <WechatOutlined class="font-icon" />
          微信登录
        </VarButton>
      </var-form>

      <transition name="fade" mode="out-in">
        <var-button
          v-if="!Show.Started"
          type="success"
          size="large"
          @click="onGetStarted"
        >
          Get Started for Free
        </var-button>
      </transition>
    </div>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/store/user";
import {} from "@vicons/ionicons5";
import { QqOutlined, WechatOutlined } from "@vicons/antd";
const formRef = ref<any | null>(null);
const UserStore = useUserStore();
const Show = ref({
  Started: false,
  delayed: false,
});
const Form = ref({
  name: "",
  password: "",
});
const login = ref("link start！");
const Load = ref({
  btn: false,
});
function onLogin() {
  formRef.value.validate().then((val: boolean) => {
    if (val) {
      Load.value.btn = true;
      UserStore.updateName(Form.value.name);
      setTimeout(() => {
        localStorage.setItem("theme", "white");
        // Load.value.btn = false;
        router.go(0);
      }, 1000);
    }
  });
}
const onGetStarted = () => {
  console.log("进入登陆状态");
  Show.value.Started = true;
  setTimeout(() => {
    Show.value.delayed = true;
  }, 500);
};
</script>
<style scoped lang="scss">
.loginClass {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  > div {
    width: 100%;
    box-sizing: border-box;
  }
  .upper {
    background: #101a30;
    border-bottom-left-radius: 25vw;
    border-bottom-right-radius: 25vw;
    transition: all 1s;
    position: relative;
    .var-image {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);
      transition: all 1s;
    }
  }
  .below {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10vh 0;
    transition: all 1s;
    > div:nth-child(1) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    &_title {
      font-weight: bolder;
      margin-bottom: 3vh;
      display: flex;
      align-items: center;
      transition: all 1s;
      color: var(--theme-colorA);
    }
    &_subtitle {
      font-size: 3.5vw;
      color: var(--theme-colorB);
    }
  }

  .formClass {
    box-sizing: border-box;
    width: 100%;
    flex-grow: 1;
    transition: all 1s;
    padding: 8vh 3vh;
    text-align: left !important;
    transition: 1s;
    > div {
      margin-bottom: 3vh;
    }
    .title {
      margin-bottom: 1vh;
      font-weight: bolder;
      font-size: 3.5vw;
    }
  }
}
.font-icon {
  width: 6vw;
  margin-right: 2vw;
}

.var-button {
  border-radius: 10vh;
}
/* 过渡 transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
