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
          heading: "2、晋将篇(2)",
          center: "邓艾",
          image: require("@/images/raiders/image061_S.jpg"),
          detail:
            "邓艾的EX武器：螺旋枪。定位：近距压制突破型。评价：可轻松突破防御并施展强力多段攻击。适于应对任何规模敌群。",
          center2: "文鸯",
          image2: require("@/images/raiders/image062_S.jpg"),
          detail2:
            "文鸯的EX武器：掷枪。定位：机动突击型。评价：擅长以远投和长距机动来与敌群周旋。初看缺少杀手锏，但集中强化后便有相当的爆发力。"
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