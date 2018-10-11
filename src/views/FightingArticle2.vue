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
          heading: "9、回合事件篇",
          center: "称号页面",
          image: require("@/images/raiders/image052_S.jpg"),
          detail:
            "游戏中会有多样的事件丰富玩家的体验。例如完成成就称号可以获得能力的提升。玩家可以查看称号页面，有计划的获得成就和能力提升。",
          center2: "回合间隙",
          image2: require("@/images/raiders/image053_S.jpg"),
          detail2:
            "在回合间隙，可能会触发一些历史性的讨伐或防御任务。玩家可以选择是否参与。看是跟风分一杯羹还是静观其变渔翁得利。"
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