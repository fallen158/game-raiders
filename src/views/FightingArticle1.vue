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
          heading: "8、战斗篇",
          center: "出征",
          image: require("@/images/raiders/image050_S.jpg"),
          detail:
            "战斗是三国无双长久以来的游戏精髓。在本作中，战斗被分为了侵攻、防卫和袭击三种。虽然酣畅砍杀的战斗方式相同，但是起到的战略作用确是不同的。",
          center2: "防御战",
          image2: require("@/images/raiders/image051_S.jpg"),
          detail2:
            "防御战是对自身或盟友领地进行防守的战斗。是抵御敌人袭击和侵攻的作战。"
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