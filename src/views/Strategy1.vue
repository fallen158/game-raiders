<template>
    <div>
        <Introduction :messages="lists"/>
    </div>
</template>

<script>
import Introduction from "@/components/Introduction.vue";
export default {
  data() {
    return {
      lists: [
        {
          title: "真三国无双7帝国 操作模式战斗武将全解析 新手教程图文攻略",
          heading: "5、政略",
          center: "征收",
          image: require("@/images/raiders/image032_S.jpg"),
          detail:
            "征收是直接向百姓收税，立即获取资源和资金。但是会大幅度降低人德。人德低会导致统治不稳固，人才流失，以及正常生产的减少。",
          center2: "交易",
          image2: require("@/images/raiders/image033_S1.jpg"),
          detail2:
            "交易也是获得资金和资源的方式。比征收获取的资源量少。但是交易不会产生人德的下降。"
        }
      ]
    };
  },
  components: {
    Introduction
  }
};
</script>

<style scoped>
</style>