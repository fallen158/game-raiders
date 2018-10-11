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
          heading: "3、人事",
          center: "放逐",
          image: require("@/images/raiders/image018_S2.jpg"),
          detail:
            "　放逐是把武将从势力特别是流浪军中驱逐出去。或者采用驱逐的方式让武将下野，减少人事支出。处断则是杀死武将，通常用来对付无法登用的俘虏。",
          center2: "登用",
          image2: require("@/images/raiders/image018_S1.jpg"),
          detail2:
            "登用可以将控制范围内在野武将进行录用。需要选定一个自己控制的城市，并指定一名在野武将。"
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