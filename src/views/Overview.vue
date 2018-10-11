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
          heading: "三、系统详解（上）",
          center: "1、系统概览",
          image: require("@/images/raiders/image001_S.jpg"),
          detail:
            "真三国无双7：帝国很好的融合了策略游戏的内政、外交系统。军略系统分类和操作简洁明了，系统完整性不错，分项针对性很强。同时，系统并不繁复，容易上手。可以说是对无双游戏的一个很好的补充和创新。",
          center2: "军略系统",
          image2: require("@/images/raiders/image002_S.jpg"),
          detail2:
            "军略系统分人事、军事、政略、谋划、战斗五个方面来对国家势力进行管理。还有购买选项对玩家指定英雄进行增强。现在玩家除了畅快厮杀外，又多了一种简单可行的运筹帷幄的策略玩法。"
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