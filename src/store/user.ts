// user.ts
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  // 开启数据持久化
  persist: true,
  state: (): StateTs => {
    return {
      name: "",
    };
  },
  actions: {
    updateName(name: string | number) {
      this.name = name;
    },
  },
});

interface StateTs {
  name: string | number;
}
