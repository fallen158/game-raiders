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
          heading: "4、军事",
          center: "征兵",
          image: require("@/images/raiders/image026_S.jpg"),
          detail:
            "征兵和大征兵都是通过支付金币换取兵员。同样都会消耗掉一次政略。大征兵通常用于紧急情况快速补充部队。",
          center2: "训练",
          image2: require("@/images/raiders/image027_S.jpg"),
          detail2:
            "训练和特训可以提升武将的功绩。都需要消耗资金，特训还要额外消耗资源。"
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