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
          heading: "2、情报",
          center: "鉴赏室",
          image: require("@/images/raiders/image017_S.jpg"),
          detail:
            "游戏中，可以进入鉴赏室进行游戏资源鉴赏。包含了武将名录；战斗、事件动画。还有武器和桌布等图像资源。",
          center2: "事典则",
          image2: require("@/images/raiders/image018_S.jpg"),
          detail2:
            "事典则包含了三国志背景资料。武将、战役介绍。以及专用词语和年表。"
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