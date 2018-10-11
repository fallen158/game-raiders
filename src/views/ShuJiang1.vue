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
          heading: "3、蜀将篇",
          center: "徐庶",
          image: require("@/images/raiders/image073_S.jpg"),
          detail:
            "徐庶的EX武器：击剑。定位：范围压制型。评价：凭借无双2压倒敌群和提升各种打法威力。一招在手纵横无敌的角色。",
          center2: "鲍三娘",
          image2: require("@/images/raiders/image074_S.jpg"),
          detail2:
            "鲍三娘的EX武器：旋刃盘。定位：广域格斗型。评价：有良好的范围和优秀的连击数。擅长对单或小集团战。"
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