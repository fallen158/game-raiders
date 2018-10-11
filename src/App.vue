<template>
  <div id="app">
    <Header/> 
    <router-view/>
      <div class="cover" v-show="hideCover"></div>
      <div class="cover-screen" v-show="hideCoverScreen"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { setInterval, clearInterval } from "timers";
export default {
  components: { Header },
  data() {
    return {
      hideCover: false,
      hideCoverScreen: false,
      background: "color:red;"
    };
  },
  created() {
    let mql = window.matchMedia("(orientation: portrait)");
    let cover = document.querySelector("cover");
    if (!mql.matches) {
      // 横屏
      this.hideCoverScreen = true;
    } else {
      // 竖屏
      this.hideCover = true;
    }
    let time = setInterval(item => {
      this.hideCover = false;
      this.hideCoverScreen = false;
      clearInterval(time);
    }, 2000);
  }
};
</script>

<style lang="scss">
@import "@/style/reset.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  height: 100vh;
  overflow: auto;
  .cover {
    background: url("./images/Home.jpg") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
  }
  .cover-screen {
    background: url("./images/Home2.jpg") no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 99999;
  }
}
</style>
