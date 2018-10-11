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
          heading: "3、蜀将篇(3)",
          center: "赵云",
          image: require("@/images/raiders/image077_S.jpg"),
          detail:
            "赵云的EX武器：龙枪。定位：近战突破型。评价：单挑和小规模战斗的性能均衡。真觉醒优秀，面对大军时可谓遇强则强。",
          center2: "姜维",
          image2: require("@/images/raiders/image078_S.jpg"),
          detail2:
            "姜维的两刃枪。定位：范围突进型。评价：擅长以正面强攻突破敌阵，对小军团和大群敌军的性能都比较优秀。"
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