export const MeasurRouter = {
  path: "/measur",
  name: "Measur",
  label: "测试页面",
  component: () => import("@/layout/layout.vue"),
  redirect: "/measur/fileCheck",
  meta: {
    title: "测试页面",
  },
  children: [
    {
      path: "fileCheck",
      name: "AkiFileCheck",
      label: "测试页面A",
      component: () => import('@/views/measur/measur.vue'),
      meta: {
        hide: true,
        title: "测试页面A",
      },
    },
  ],
};
