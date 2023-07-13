<template>
  <var-skeleton :fullscreen-z-index="10" title avatar card :rows="3" :loading="Show.page" >
    <var-card
      title="我是主页哦"
      description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
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
