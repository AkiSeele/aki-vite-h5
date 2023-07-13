<template>
  <div class="LayoutClass">
    <HeadBar></HeadBar>
    <div class="AkiWarp">
      <RouterView></RouterView>
    </div>
    <Footer class="FooterClass"></Footer>
  </div>
</template>
<script setup lang="ts">
import HeadBar from "./header/HeadBar.vue";
import Footer from "./footer/Footer.vue";
</script>

<style scoped lang="scss">
.AkiWarp {
  flex-grow: 1;
  background: var(--theme-back);
  overflow-x: hidden;
  overflow-y: auto;
}
:deep(.var-app-bar){
  z-index: 15 !important;
}
.LayoutClass {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.FooterClass {
  background: var(--theme-back);
  height: 8vh;
  min-height: 8vh;
  border-top: 1px solid #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 15 !important;
  overflow-x: visible;
  :deep(.var-bottom-navigation-item) {
    flex-direction: row;
  }
}
</style>
