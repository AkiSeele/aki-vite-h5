<template>
  <var-bottom-navigation v-model:active="active" @change="onChange">
    <var-bottom-navigation-item>
      <template #icon>
        <var-icon name="home" size="30" />
      </template>
    </var-bottom-navigation-item>
    <var-bottom-navigation-item>
      <template #icon>
        <var-icon name="magnify" size="30" />
      </template>
    </var-bottom-navigation-item>
    <var-bottom-navigation-item>
      <template #icon>
        <var-icon name="heart" size="30" />
      </template>
    </var-bottom-navigation-item>

    <var-bottom-navigation-item>
      <template #icon>
        <var-icon name="account-circle" size="30" />
      </template>
    </var-bottom-navigation-item>
  </var-bottom-navigation>
</template>

<script setup lang="ts">
import router from "@/router";
const route = useRoute();
const active = ref(0);
console.log();
onMounted(() => {
  const routePath = route.path;
  if (routePath === "/home") {
    active.value = 0
  } else if (routePath === "/search") {
    active.value = 1
  } else if (routePath === "/collect") {
    active.value = 2
  } else if (routePath === "/personal") {
    active.value = 3
  }
});
const onChange = (val: number | string) => {
  if (val === 0) {
    router.push("/home");
  } else if (val === 1) {
    router.push("/search");
  } else if (val === 2) {
    router.push("/collect");
  } else if (val === 3) {
    router.push("/personal");
  }
};
</script>
