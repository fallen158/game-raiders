<template>
  <div class="home" v-loading="loading">
    <div class="loading" v-show="isLoading">
      <div class="swiper">
        <!-- swiper1 -->
        <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <swiper-slide class="slide-6"></swiper-slide>
          <!-- 左右按钮 -->
          <!-- <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
          <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div> -->
        </swiper>
        <!-- swiper2 Thumbs -->
        <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
          <swiper-slide class="slide-1"></swiper-slide>
          <swiper-slide class="slide-2"></swiper-slide>
          <swiper-slide class="slide-3"></swiper-slide>
          <swiper-slide class="slide-4"></swiper-slide>
          <swiper-slide class="slide-5"></swiper-slide>
          <swiper-slide class="slide-6"></swiper-slide>
        </swiper>
      </div>
      <section class="synopsis">
        <div class="synopsis_header">
          <div class="title">
            真三国无双 : 帝国 真 ·<br> 三國無双7 Empires
            <div class="date">2018-10-11/しん・さんごくむそう</div>
          </div>
          <div class="assess">评价人数不足</div>
        </div>
        <div class="synopsis_main">
          <div class="adjective">动作</div>
          <div>可以同时享受 "一骑当先" 爽快动作以及  "占领国家" 模拟要素的 《帝国》系列最新作。</div>
          <div class="mark"><i class="el-icon-circle-check-outline"></i>多人同屏</div>
        </div>
        <ul class="synopsis_footer">
          <li v-for="list in lists " :key="list.id">
            <div>{{list.message}}</div>
            <div class="list_name">{{list.name}}</div>
          </li>
        </ul>
      </section>

      <article class="gamePresent">
        <div class="gamePresent_header">
          <h3>详细介绍</h3>
          《真三国无双7 帝国》是可以同时享受 "一骑当千" 爽快动作以及 "占领国家" 模拟要素的《帝国》系列最新作。
          玩家将扮演三国时代的英杰,运用政略与战斗来达到统一天下的目标。本作将实现因玩家的抉择而有着多样发展的高自由度游戏性，
          透过戏剧演出呈现个人的成长与势力的兴衰，提供玩家丰富的三国体验。战斗系统部分大幅进化，导入大规模秘技，简易据点等新要素，
          以及会随着天候与事件而改变的战场，让玩家享受充满战略性与战术性的据点攻防乐趣。除此之外，还收录充实的编辑功能与连线功能，
          提供反覆游戏性高的游戏系统。
        </div>
        <div class="gamePresent_footer">
          <div class="prompt">玩过这款游戏了？</div>
          <div class="recommend">· 你是否推荐这游戏？·</div>
          <div class="buttons">
            <el-row>
              <el-button size="medium" icon="el-icon-star-off">推荐</el-button>
              <el-button size="medium">不推荐</el-button>
            </el-row>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5
        // 左右按钮
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5,
        slideToClickedSlide: true
      },
      lists: [
        { name: "中文", message: "无" },
        { name: "容量", message: "14.30GB" },
        { name: "玩家人数", message: "1-2" },
        { name: "实体卡带", message: "有" },
        { name: "试玩", message: "无" }
      ],
      loading: true,
      isLoading: false
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    open() {
      this.$message("这是一条消息提示");
    }
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
.home {
  flex: 1;
  margin-top: 3.2rem;
}
.swiper {
  height: 10rem;
}
.swiper-container {
  background-color: #000;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
  &.slide-1 {
    background-image: url("../images/images_1.jpg");
  }
  &.slide-2 {
    background-image: url("../images/images_2.jpg");
  }
  &.slide-3 {
    background-image: url("../images/images_3.jpg");
  }
  &.slide-4 {
    background-image: url("../images/images_4.jpg");
  }
  &.slide-5 {
    background-image: url("../images/images_5.jpg");
  }
  &.slide-6 {
    background-image: url("../images/images_6.jpg");
  }
}
.gallery-top {
  height: 80% !important;
  width: 100%;
}
.gallery-thumbs {
  height: 20% !important;
  box-sizing: border-box;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.6;
  border: 2px solid #333;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
  border: 2px solid white;
}
.synopsis {
  background: #fff;
  &_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0 0 0.4rem;
    .title {
      font-weight: 600;
      font-size: 0.8rem;
      line-height: 0.9rem;
    }
    .date {
      font-size: 0.2rem;
      font-weight: 400;
      color: #616161;
    }
    .assess {
      color: #a4a4a4;
      font-size: 0.1rem;
      font-weight: 500;
      transform: scale(0.8);
    }
  }
  &_main {
    padding: 0 0.4rem;
    .adjective {
      margin: 0.15rem 0;
      background: #000;
      color: #fff;
      width: 1.5rem;
      border-radius: 3px;
      text-align: center;
      font-size: 0.4rem;
    }
    .mark {
      font-size: 0.5rem;
      .el-icon-circle-check-outline {
        color: #c92132;
        font-weight: 600;
        font-size: 0.6rem;
        margin-right: 0.1rem;
      }
    }
  }
  &_footer {
    border: 1px solid #ebebeb;
    margin-top: 0.2rem;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      position: relative;
      padding: 0.15rem 0;
      font-size: 0.6rem;
    }
    li::before {
      content: "";
      position: absolute;
      top: 25%;
      right: 0;
      background: #ebebeb;
      height: 0.8rem;
      width: 1px;
    }
    .list_name {
      font-size: 0.4rem;
      color: #909090;
      font-weight: 500;
      transform: scale(0.9);
    }
  }
}
.gamePresent {
  margin-top: 0.6rem;
  .gamePresent_header {
    background: #fff;
    padding: 0.2rem 0.4rem;
    font-size: 0.5rem;
    h3 {
      padding: 0.2rem 0;
    }
  }
  .gamePresent_footer {
    margin: 0.2rem 0;
    text-align: center;
    background: #fff;
    color: #969696;
    font-size: 0.4rem;
    font-weight: 500;
    padding: 0.2rem 0;
    .prompt {
      padding: 0.3rem 0;
    }
    .recommend {
      color: #c92132;
    }
  }
  .buttons {
    padding: 0.3rem 0;
  }
}
</style>

