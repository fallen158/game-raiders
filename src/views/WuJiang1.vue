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
          heading: "3、吴将篇",
          center: "孙策",
          image: require("@/images/raiders/image063_S.jpg"),
          detail:
            "孙策的EX武器：旋棍。定位：近战格斗型。评价：快节奏近身搏斗，擅长对单军团作战。",
          center2: "孙坚",
          image2: require("@/images/raiders/image064_S.jpg"),
          detail2:
            "孙坚的EX武器：九环刀。定位：近距控场型。评价：有较良好的近身范围压制力和不错的属性输出。可应对单军团或局域少数军团。"
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