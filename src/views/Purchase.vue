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
          heading: "7、购买篇",
          center: "武器店",
          image: require("@/images/raiders/image002_S1.jpg"),
          detail:
            "武器店出售武器。英雄装备武器主要看武器的攻击力和适性。根据自身玩法选取武器的种类和属性，同时关注武器附带的诸如轻功一类的效果。",
          center2: "道具店",
          image2: require("@/images/raiders/image003_S.jpg"),
          detail2:
            "道具店出售各类增强道具。能够直接增强武将的战斗能力。除了升级，这是强化武将的另一个途径。"
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