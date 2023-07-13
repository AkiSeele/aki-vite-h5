<template>
  <div class="loginClass">
    <VarButton @click="onLogin" :loading="Load.btn">{{ login }}</VarButton>
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/store/user";

const UserStore = useUserStore();
const login = ref("link start！");
const Load = ref({
  btn: false,
});
function onLogin() {
  Load.value.btn = true;
  UserStore.updateName("AkiSeele");
  setTimeout(() => {
    localStorage.setItem("theme", 'white')
    Load.value.btn = false;
    router.go(0)
  }, 1000);
}
</script>
<style scoped lang="scss">
.loginClass {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
