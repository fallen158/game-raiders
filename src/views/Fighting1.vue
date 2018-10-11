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
          heading: "5、战斗",
          center: "战斗详解",
          image: require("@/images/raiders/image033_S.jpg"),
          detail:
            "玩家要统一帝国，就必须进行战斗。在国力富强，兵员充足后就需要选择地图上的目标势力进行征伐。同样，面对敌人入侵时，也需要进行防御战斗。",
          center2: "杀伤敌人",
          image2: require("@/images/raiders/image034_S.jpg"),
          detail2:
            "战斗是以杀伤敌人有生力量和完成据点占据为目标的。补给站和通道的颜色越红则在该区域作战敌军能力越强。战斗就要分割敌人补给、行动路线，扩大己方支配范围并有效杀伤敌军。"
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