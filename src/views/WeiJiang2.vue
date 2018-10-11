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
          heading: "1、魏将篇(2)",
          center: "曹操",
          image: require("@/images/raiders/image057_S.jpg"),
          detail:
            "许褚的EX武器：将剑。定位：强攻突破型。评价：擅长正面压迫式进攻，拥有易出且强大的SR。适宜数据流打法。",
          center2: "夏侯渊",
          image2: require("@/images/raiders/image058_S.jpg"),
          detail2:
            "夏侯渊的EX武器：鞭箭弓。定位：中程范围射击型。评价：能较快地发起正面范围攻击，有不错的属性段数。擅长小集团和局域多军团战。"
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