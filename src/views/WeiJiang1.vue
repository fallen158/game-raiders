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
          heading: "1、魏将篇",
          center: "许褚",
          image: require("@/images/raiders/image055_S.jpg"),
          detail:
            "许褚的EX武器：碎棒。定位：近战突破型。评价：套路简单且输出良好，只是有时收招硬直较大。擅长对单军团或局域少数军团。",
          center2: "徐晃",
          image2: require("@/images/raiders/image056_S.jpg"),
          detail2:
            "徐晃的EX武器：大斧。定位：近范围强攻型。评价：较擅长近距范围压制和破防，可应对单军团或局域少数军团。"
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