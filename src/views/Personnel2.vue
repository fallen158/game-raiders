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
          heading: "3、军略2",
          center: "任命",
          image: require("@/images/raiders/image030_S.jpg"),
          detail:
            "任命用来对属下进行职务划分。大将军用来统领军务，军师则是管理政略。太守则用来管理属地。优秀的人才得到任命会自行的大幅度提升势力、属地的相关能力。",
          center2: "交流",
          image2: require("@/images/raiders/image031_S.jpg"),
          detail2:
            "交流则是用来联络武将之间的感情。需要消耗资金才能进行交流。能够提升君臣、武将之间的关系。"
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