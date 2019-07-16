<template>
  <div>
    <FooterGuide v-show="$route.meta.isShowFooter" />
    <router-view></router-view>
  </div>
</template>

<script>
// 引入组件
import FooterGuide from "./components/FooterGuide";

// 引入api进行测试
import { reqAddress, reqCategories, reqShops, reqUserMessages } from "./api";
export default {
  name: "App",
  // 注册组件
  components: {
    FooterGuide
  },
  async mounted() {
    const result = await reqAddress("113.83786","22.62601");
    console.log("result :", result);
    const result1 = await reqCategories();
    console.log("result1 :", result1);
    const result2 = await reqShops("116.36867","40.10038");
    console.log('result2 :', result2);
    const result3 = await reqUserMessages();
    console.log('result3 :', result3);
  }
};
</script>

<style scope>
</style>
