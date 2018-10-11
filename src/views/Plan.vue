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
          heading: "6、谋划",
          center: "谋划",
          image: require("@/images/raiders/image042_S.jpg"),
          detail:
            "谋划是一种外交手段。通过谋划可以进行同盟。盟国之前可以相互支援和协助。",
          center2: "目标势力",
          image2: require("@/images/raiders/image045_S.jpg"),
          detail2:
            "谋划需要选定目标势力。并派遣己方武将前往交涉。人德和等级高的武将更可能交涉成功。"
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