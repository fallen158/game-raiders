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
          heading: "3、军略(2)",
          center: "布施",
          image: require("@/images/raiders/image043_S.jpg"),
          detail:
            "布施则是通过消耗物资对所属城市进行人德的笼络。大布施则扩展到全势力，同时消耗额外的金钱。这是稳定人德的关键手段。",
          center2: "建设",
          image2: require("@/images/raiders/image044_S.jpg"),
          detail2:
            "建设则是增强国力的手段。也是增加人德的手段。"
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