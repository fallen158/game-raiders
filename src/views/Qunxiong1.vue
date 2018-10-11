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
          heading: "3、群雄篇",
          center: "陈宫",
          image: require("@/images/raiders/image069_S.jpg"),
          detail:
            "陈宫的EX武器：兵法简。定位：压制控场型。评价：擅长破防和压迫式进攻。输出不太稳定，但真觉醒清场优秀。",
          center2: "吕布",
          image2: require("@/images/raiders/image070_S.jpg"),
          detail2:
            "吕布的EX武器：方天画戟。定位：强攻压制型。评价：简单暴力的代表。或许在某些领域不是最强的，但已足够统治几乎任何场面。"
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