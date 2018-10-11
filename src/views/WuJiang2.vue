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
          heading: "3、吴将篇(2)",
          center: "凌统",
          image: require("@/images/raiders/image065_S.jpg"),
          detail:
            "凌统的EX武器：三节棍。定位：快速格斗型。评价：花样多变的高速多段打击，令敌人防不胜防。对群有性能不错的真觉醒。",
          center2: "甘宁",
          image2: require("@/images/raiders/image066_S.jpg"),
          detail2:
            "孙坚的EX武器：锁分铜。定位：强攻突破型。评价：可用紧凑的短快攻进行属性或连击输出，而敌人难以防御。擅长单军团战。"
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