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
          heading: "2、情报信息",
          center: "军略界面",
          image: require("@/images/raiders/image008_S1.jpg"),
          detail:
            "在军略界面，可以按空格进行情报概览。这里可以查看玩家、势力、区域的各种情报。要善于了解各方情况，才能制定合理的战略战术。",
          center2: "玩家情报",
          image2: require("@/images/raiders/image009_S.jpg"),
          detail2:
            "在玩家情报中，可以对秘计进行设定。秘计是英雄在战斗中可用的具有特殊功能的策略。可能极大的扭转战局，只能在战前设定。"
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