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
          heading: "2、晋将篇",
          center: "司马懿",
          image: require("@/images/raiders/image059_S.jpg"),
          detail:
            "司马懿的EX武器：拂尘。定位：范围控场型。评价：优秀的控场力和连击数弥补了基础火力的不足。",
          center2: "司马昭",
          image2: require("@/images/raiders/image060_S.jpg"),
          detail2:
            "司马昭的EX武器：烈击刀。定位：近距范围射击型。评价：以多重射击来进行范围输出，各项攻击力强，适合从单军团到大群战的各种场面。"
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