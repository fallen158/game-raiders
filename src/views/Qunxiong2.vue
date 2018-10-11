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
          heading: "3、群雄篇(2)",
          center: "吕玲绮",
          image: require("@/images/raiders/image071_S.jpg"),
          detail:
            "吕玲绮的EX武器：十字戟。定位：强攻突破型。评价：攻击手段丰富，擅长正面突破。远近皆可，爆发力强。",
          center2: "貂蝉",
          image2: require("@/images/raiders/image072_S.jpg"),
          detail2:
            "貂蝉的EX武器：多节鞭。定位：乱舞特攻型。评价：以各种全周攻击为主。武器压制力稍弱，但可以凭借优秀的乱舞速杀武将。"
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