<!-- 弹出层菜单 -->
<template>
  <div class="PoupClass">
    <var-row>
      <var-col :span="16">
        <var-image
          width="11vw"
          height="11vw"
          fit="cover"
          radius="50%"
          src="https://akiimage-1314209857.cos.ap-guangzhou.myqcloud.com/image/pixiv/202307031804218.png"
        />
      </var-col>
      <var-col :span="8" style="height: 11vw" justify="flex-end">
        <var-menu offset-x="6px" v-model:show="showMenu">
          <var-button round text>
            <var-icon
              style="color: var(--theme-colorA)"
              name="dots-vertical"
              :size="24"
            />
          </var-button>

          <template #menu>
            <var-cell @click="closeMenu">菜单项</var-cell>
            <var-cell @click="closeMenu">菜单项</var-cell>
            <var-cell @click="closeMenu">菜单项</var-cell>
          </template>
        </var-menu>
      </var-col>
      <var-col :span="24">
        <div class="account">
          <div class="account_name">
            {{ userStore.name }}
          </div>
          <div class="account_describe">@zsrbxs</div>
        </div>
      </var-col>
      <var-col :span="24" style="color: var(--theme-colorB); font-size: 3.5vw">
        这里是描述
      </var-col>
      <var-divider />
    </var-row>

    <div class="main">
      <div class="main_rouert">
        <div>
          <var-icon name="checkbox-marked-circle" size="30" />
          <span>菜单A</span>
        </div>
        <div>
          <var-icon name="heart" size="30" />
          <span>菜单B</span>
        </div>
        <div>
          <var-icon name="trash-can" size="30" />
          <span>菜单C</span>
        </div>
        <div>
          <var-icon name="map-marker-radius" size="30" />
          <span>菜单D</span>
        </div>
        <div>
          <var-icon name="cog" size="30" />
          <span>菜单E</span>
        </div>
      </div>

      <var-divider />

      <div class="collapseBox">
        <var-skeleton :loading="true">加载的数据</var-skeleton>
      </div>
      <div class="footer">
        <var-button @click="centerPopup = true" round text>
          <var-icon name="power" :size="24" />
        </var-button>
      </div>
    </div>

    <var-popup
      v-model:show="centerPopup"
      overlay-class="popup-example-custom-overlay"
    >
      <div class="example-block">
        确定退出当前账号吗
        <div class="example-button">
          <var-button size="small" @click="centerPopup = false"
            >取消</var-button
          >
          <var-button
            size="small"
            type="warning"
            @click="onRemove"
            style="margin-left: 3vw"
            >退出</var-button
          >
        </div>
      </div>
    </var-popup>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";
import { useUserStore } from "@/store/user";
const userStore = useUserStore();
const centerPopup = ref(false);
const showMenu = ref(false);

function closeMenu() {
  showMenu.value = false;
}
function onRemove() {
  userStore.$reset();
  setTimeout(() => {
    router.go(0);
  }, 200)
}
</script>

<style lang="scss" scoped>
.example-block {
  padding: 20px 24px;
  width: 60vw;
  border-radius: 8px;
  color: var(--theme-colorA);
}
.example-button {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin-top: 2vh;
}
.popup-example-custom-overlay {
  border-radius: 10px;
}
.var-cell {
  color: var(--theme-colorA);
}
.var-col {
  align-items: center;
  margin-bottom: 2vh;
  background-clip: content-box !important;
}

.PoupClass {
  height: 100%;
  display: flex;
  flex-direction: column;
  .account {
    &_name {
      color: var(--theme-colorA);
      font-size: 4.5vw;
    }

    &_describe {
      font-size: 3.5vw;
      color: var(--theme-colorB);
    }
  }

  .main {
    flex-grow: 1;
    align-items: center;
    overflow-x: hidden;
    overflow-y: auto;
    color: var(--theme-colorA);
    &_rouert {
      height: 37vh;
      margin: 4.5vh 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      font-size: 6vw;
      > div {
        display: flex;
        align-items: center;
        padding: 1vh 0 1vh 1vh;
        border-radius: 8px;
        transition: all 0.2s;
        span {
          margin-left: 7vw;
        }
      }
      > div:active {
        background: var(--theme-active);
        border-radius: 8px;
      }
    }
  }
  .collapseBox {
    margin-top: 2.5vh;
  }

  .footer {
    position: absolute;
    bottom: 2.8vh;
  }
}
</style>
