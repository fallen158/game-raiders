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
          heading: "4、君主",
          center: "武将",
          image: require("@/images/raiders/image028_S.jpg"),
          detail:
            "玩家可以扮演普通武将，通过指派的任务进行战斗。也可以扮演君主，自由确定战斗的方向。就乐趣和自由度而言，还是君主更有意思。",
          center2: "资源分配",
          image2: require("@/images/raiders/image029_S.jpg"),
          detail2:
            "君主可以分配国家的整体方针。总共有三点权重可以分配。在人事、富国、外交和战斗分项上分配权重越高，属下的相关倾向就越明显。"
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