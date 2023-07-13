<template>
  <var-app-bar title="标题" round>
    <template #left>
      <var-button color="transparent" text-color="#fff" round text>
        <var-icon name="chevron-left" :size="24" />
      </var-button>
    </template>

    <template #right>
      <var-button
        color="transparent"
        text-color="#fff"
        round
        text
        @click="toggleRootTheme"
      >
        <var-icon name="white-balance-sunny" :size="24" />
      </var-button>

      <var-button
        color="transparent"
        text-color="#fff"
        round
        text
        @click="popupRight = true"
      >
        <var-icon name="menu" :size="24" />
      </var-button>
    </template>
  </var-app-bar>

  <var-popup position="right" v-model:show="popupRight">
    <div class="popup-example-block">
      <SlideBar></SlideBar>
    </div>
  </var-popup>
</template>
<script setup lang="ts">
import SlideBar from "../slidebar/SlideBar.vue";
import { StyleProvider } from "@varlet/ui";
const popupRight = ref(false);
let rootStyleVars = <any>null;

const darkTheme = {
  "--color-primary": "#1E1E1E",
  "--bottom-navigation-item-active-background-color": "#cccccc",
  "--popup-content-background-color": "#2c2c33",
  "--menu-background-color": "#2c2c33",
};

function toggleRootTheme() {
  rootStyleVars = rootStyleVars ? null : darkTheme;
  StyleProvider(rootStyleVars);
  if (rootStyleVars) {
    localStorage.setItem("theme", "night");
    document.documentElement.style.setProperty("--theme-back", "#2c2c33");
    document.documentElement.style.setProperty("--theme-colorA", "#ffffff");
    document.documentElement.style.setProperty("--theme-colorB", "#ffffff");
    document.documentElement.style.setProperty("--theme-active", "#494949");
  } else {
    localStorage.setItem("theme", "white");
    document.documentElement.style.setProperty("--theme-back", "#ffffff");
    document.documentElement.style.setProperty("--theme-colorA", "#2e3236");
    document.documentElement.style.setProperty("--theme-colorB", "#516573");
    document.documentElement.style.setProperty("--theme-active", "#cccccc");
  }
}
</script>

<style scoped lang="scss">
.popup-example-custom-overlay {
  background: rgba(0, 0, 0, 0.3) !important;
}

.popup-example-block {
  width: 85vw;
  height: 100vh;
  padding: 3.4vh 9vw 8vh 9vw;
  background: var(--theme-back);
}
</style>
