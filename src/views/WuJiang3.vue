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
          heading: "3、吴将篇(3)",
          center: "鲁肃",
          image: require("@/images/raiders/image067_S.jpg"),
          detail:
            "鲁肃的EX武器：九齿耙。定位：近距压制型。评价：以简单实用的招式来压制敌人。擅长小集团战和局域密集多军团战。",
          center2: "韩当",
          image2: require("@/images/raiders/image068_S.jpg"),
          detail2:
            "韩当的EX武器：短戟。定位：近战突击型。评价：隐忍爆发式的角色，输出不错但套路比较单一。擅长对单军团。"
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