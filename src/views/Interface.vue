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
          heading: "一、操作/菜单/界面",
          center: "在非战斗界面，游戏采用方向键进行各类菜单选择。",
          image: require("@/images/raiders/image004_S.jpg"),
          detail:
            "玩家可以通过主菜单下config程序进行游戏设置，不过需要进行繁体转码。游戏支持的分辨率较少。如果在游戏内设定，则只能通过左右方向键逐次变更分辨率。",
          center2: "在游戏内政主界面，游戏采用方向键进行各类菜单选择。",
          image2: require("@/images/raiders/image005_S.jpg"),
          detail2:
            "游戏内政主界面提供涵盖内政、外交和军事的各项选择。玩家可以发布命令，获取情报。并通过势力地图了解当前的战役情况。"
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