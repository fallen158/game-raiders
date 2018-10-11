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
          heading: "二、全面上手指南",
          center: "黄巾之乱",
          image: require("@/images/raiders/image007_S.jpg"),
          detail:
            "时值东汉末年，局势陷入不可逆转的混乱。此剧本群雄并起，袁绍和黄巾军等是最大的势力。很多玩家耳熟能详的英雄人物现在还未名满天下。",
          center2: "反董卓联合",
          image2: require("@/images/raiders/image008_S.jpg"),
          detail2:
            "此剧本发生在黄巾之乱结束后，董卓挟持朝政。仍旧是众多的势力割据，中小势力的发展更具挑战性。曹操等英雄也开始崭露头角。"
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