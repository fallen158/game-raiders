<template>
    <div class="head">
        <div class="title">
            <div class="title_left">
              <div @click="back" class="image">
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyBjbGFzcz0iaWNvbiIgd2lkdGg9IjIwMHB4IiBoZWlnaHQ9IjIwMC4wMHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTY2Mi42NDU2MzYgNjguNDEyNDIzMzNjOC43OTEzMTggMCAxNy41ODI2MzYgMy4zNTM2OTcgMjQuMjg5NTc3IDEwLjA2MDYzOCAxMy40MTQzMzQgMTMuNDE0MzM0IDEzLjQxNDMzNCAzNS4xNjM5MTcgMCA0OC41NzgyNTFsLTM4Ny45MDk4NDMgMzg3LjkxMDI5NCAzODguNjYxMjMgMzg4LjY2MTIyOWMxMy40MTQzMzQgMTMuNDE0MzM0IDEzLjQxNDMzNCAzNS4xNjM0NjUgMCA0OC41Nzc4LTEzLjQxNDc4NiAxMy40MTQzMzQtMzUuMTYzOTE3IDEzLjQxNDMzNC00OC41NzgyNTEgMGwtNDEyLjk1MDM1NS00MTIuOTUwMzU1Yy0xMy40MTQ3ODYtMTMuNDE0MzM0LTEzLjQxNDc4Ni0zNS4xNjM5MTcgMC00OC41NzgyNTFsNDEyLjE5ODk2OC00MTIuMTk4OTY4YzYuNzA2OTQxLTYuNzA2OTQxIDE1LjQ5ODI1OS0xMC4wNjA2MzggMjQuMjg4Njc0LTEwLjA2MDYzOHoiIGZpbGw9IiNmZmZmZmYiIC8+PC9zdmc+" alt="">
              </div>
              <div class="center">真三国无双7</div>
            </div>
            <div class="title_right"></div>
        </div>
        <ul class="table" >
           <li @click="switchTheme(index)" v-for="(list,index ) in lists" :key="list.id"
            :class="['table-item',{active:currentNumber === index}]" >
              <router-link :to="list.path">{{list.name}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { name: "游戏信息", path: "/home" },
        { name: "攻略", path: "/raiders" },
        { name: "视频", path: "/video" }
      ],
      currentNumber: 0
    };
  },
  methods: {
    switchTheme(index) {
      this.currentNumber = index;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/_var.scss";
.head {
  font-size: 0.65rem;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  z-index: 9999;
  .title {
    background: $theme-color;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.3rem 0.5rem;
  }
  .title_left {
    display: flex;
    align-items: center;
    .center {
      margin-left: 0.4rem;
    }
    img {
      margin-top: 0.2rem;
      width: 0.6rem;
      height: 0.6rem;
    }
  }
  .table {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    color: $table-color;
    background: #fff;
    .table-item {
      flex: 1;
      padding: 0.3rem 0;
    }
    .table-item.active {
      border-bottom: 2px solid $theme-color;
      color: $theme-color;
    }
  }
}
</style>