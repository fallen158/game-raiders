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
          heading: "3、军略",
          center: "军略系统",
          image: require("@/images/raiders/image021_S.jpg"),
          detail:
            "本作的特色就是加入了类似三国志的军略系统。玩家可以通过人事进行势力将领的招募、放逐、任命等决策。通过招揽和安置不同的武将进行争霸全国的攻防战斗。",
          center2: "军事系统。",
          image2: require("@/images/raiders/image022_S.jpg"),
          detail2:
            "军事系统则提供了征兵、训练等功能。通过严格治军，玩家能集合起一只庞大的训练有素的军队。给予英雄战斗，特别是防御战斗以极大的辅助。"
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