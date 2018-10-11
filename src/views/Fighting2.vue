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
          heading: "5、战斗(2)",
          center: "战斗详解",
          image: require("@/images/raiders/image040_S.jpg"),
          detail:
            "战斗中，积累ko数也是很重要的。战绩和武器能力都能被强化。无双割草就是要割出个气势磅礴的样子。",
          center2: "杀伤敌人",
          image2: require("@/images/raiders/image041_S.jpg"),
          detail2:
            "玩家还可以通过委任、进军、护卫和防御等命令指挥友军部队。通过军队进行牵制、诱敌甚至强攻任务。当然，很多情况下，一个天下无双的英雄就足够了。"
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