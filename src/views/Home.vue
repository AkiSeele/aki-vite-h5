<template>
  <var-skeleton :fullscreen-z-index="10" title avatar card :rows="3" :loading="Show.page" >
    <var-card
      title="我是主页哦"
      description="描述内容~"
    />
  </var-skeleton>
</template>
<script setup lang="ts">
const Show = ref({
  page: false,
});

onMounted(() => {
  Show.value.page = true; 
  setTimeout(() => {
    Show.value.page = false;
  }, 1000);
});
</script>

<style scoped lang="scss"></style>
