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
          heading: "3、蜀将篇(2)",
          center: "月英",
          image: require("@/images/raiders/image075_S.jpg"),
          detail:
            "月英的EX武器：战戈。定位：助攻压制型。评价：以强大的持续无双为掩护，迅速冲破敌阵。可应对任何规模敌群。",
          center2: "诸葛亮",
          image2: require("@/images/raiders/image076_S.jpg"),
          detail2:
            "诸葛亮的EX武器：羽扇。定位：中范围射击型。评价：擅长以各种范围/远射技来牵制敌群。除真觉醒外没有特别猛烈的输出，蓄势后发式的角色。"
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