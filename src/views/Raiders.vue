<template>
    <div class="raiders" v-loading="loading">
       <div class="loading" v-show="isLoading">
          <div class="raiders_center">
            <div class="warper">
                <div class="warper_title">上手指南</div>
                <div class="warper_item" v-for="guide in raiders.guides" :key="guide.id">
                    <router-link :to="guide.path">{{guide.name}}</router-link>
                </div>
            </div>
            <div class="warper">
                <div class="warper_title">系统详解</div>
                <div class="warper_item" v-for="detailed in raiders.detaileds" :key="detailed.id">
                    <router-link :to="detailed.path">{{detailed.name}}</router-link>
                </div>
            </div>
            <div class="warper">
                <div class="warper_title">武将图鉴</div>
                <div class="warper_item" v-for="Illustration in raiders.Illustrations" :key="Illustration.id">
                    <router-link :to="Illustration.path">{{Illustration.name}}</router-link>
                </div>
            </div>
          </div>
       </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      raiders: {
        guides: [
          {
            name: "真三国无双7帝国-上手指南——操作及界面",
            path: "raiders/interface"
          },
          { name: "真三国无双7帝国-上手指南——游戏模式", path: "raiders/mode" },
          {
            name: "真三国无双7帝国-上手指南——情报",
            path: "raiders/intelligence"
          },
          { name: "真三国无双7帝国-上手指南——军略", path: "raiders/militarys" },
          { name: "真三国无双7帝国-上手指南——君主", path: "raiders/monarch" },
          {
            name: "真三国无双7帝国-上手指南——战斗(1)",
            path: "raiders/fighting1"
          },
          {
            name: "真三国无双7帝国-上手指南——战斗(2)",
            path: "raiders/fighting2"
          }
        ],
        detaileds: [
          {
            name: "真三国无双7帝国-系统详解——系统概览",
            path: "raiders/overview"
          },
          {
            name: "真三国无双7帝国-系统详解——情报信息",
            path: "raiders/intelligences"
          },
          {
            name: "真三国无双7帝国-系统详解——人事(1)",
            path: "raiders/personnel1"
          },
          {
            name: "真三国无双7帝国-系统详解——人事(2)",
            path: "raiders/personnel2"
          },
          { name: "真三国无双7帝国-系统详解——军事", path: "raiders/military" },
          {
            name: "真三国无双7帝国-系统详解——政略(1)",
            path: "raiders/strategy1"
          },
          {
            name: "真三国无双7帝国-系统详解——政略(2)",
            path: "raiders/strategy2"
          },
          { name: "真三国无双7帝国-系统详解——谋划", path: "raiders/plan" },
          {
            name: "真三国无双7帝国-系统详解——购买篇",
            path: "raiders/purchase"
          },
          {
            name: "真三国无双7帝国-系统详解——战斗篇",
            path: "raiders/fightingArticle1"
          },
          {
            name: "真三国无双7帝国-系统详解——回合篇",
            path: "raiders/fightingArticle2"
          }
        ],
        Illustrations: [
          {
            name: "真三国无双7帝国-武将图鉴——魏将篇(1)",
            path: "raiders/WeiJiang1"
          },
          {
            name: "真三国无双7帝国-武将图鉴——魏将篇(2)",
            path: "raiders/WeiJiang2"
          },
          {
            name: "真三国无双7帝国-武将图鉴——晋将篇(1)",
            path: "raiders/JinJiang1"
          },
          {
            name: "真三国无双7帝国-武将图鉴——晋将篇(2)",
            path: "raiders/JinJiang2"
          },
          {
            name: "真三国无双7帝国-武将图鉴——吴将篇(1)",
            path: "raiders/WuJiang1"
          },
          {
            name: "真三国无双7帝国-武将图鉴——吴将篇(2)",
            path: "raiders/WuJiang2"
          },
          {
            name: "真三国无双7帝国-武将图鉴——吴将篇(3)",
            path: "raiders/WuJiang3"
          },
          {
            name: "真三国无双7帝国-武将图鉴——群雄篇(1)",
            path: "raiders/Qunxiong1"
          },
          {
            name: "真三国无双7帝国-武将图鉴——群雄篇(2)",
            path: "raiders/Qunxiong2"
          },
          // 用于更新
          // {
          //   name: "真三国无双7帝国-武将图鉴——蜀将篇(1)",
          //   path: "raiders/ShuJiang1"
          // },
          // {
          //   name: "真三国无双7帝国-武将图鉴——蜀将篇(2)",
          //   path: "raiders/ShuJiang2"
          // },
          // {
          //   name: "真三国无双7帝国-武将图鉴——蜀将篇(3)",
          //   path: "raiders/ShuJiang3"
          // }
        ]
      },
      loading: true,
      isLoading: false
    };
  },
  created() {
    let time = setInterval(item => {
      this.loading = false;
      this.isLoading = true;
    }, 3000);
  }
};
</script>

<style lang="scss" scoped>
.raiders {
  flex: 1;
  color: #303133;
  padding: 0 0.3rem;
  margin-top: 3rem;
}
.warper {
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  margin-top: 0.4rem;
  &_title {
    border-bottom: 1px solid #ebeef5;
    font-size: 0.8rem;
    padding: 0.2rem;
  }
  &_item {
    padding: 0.15rem 0.4rem;
  }
}
.warper:nth-child(3) {
  margin-bottom: 0.4rem;
}
</style>