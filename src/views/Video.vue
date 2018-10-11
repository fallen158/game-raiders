<template>
    <div class="videos" v-loading="loading">
        <div class="loading" v-show="isLoading">
            <div class="wrapper" v-for="list in lists" :key="list.id">
                <div class="wrapper_video">
                    <iframe class="iframeVideo" :src="list.url" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> 
                </div>
                    <div class="wrapper_Introduction">
                   {{list.name}}
                </div>  
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      isLoading: false,
      lists: [
        {
          url: "https://www.youtube.com/embed/Av2wfH7sQDY",
          name: "『真・三國無双８』開場動畫"
        },
        {
          url: "https://www.youtube.com/embed/hgIdyn6vRqM",
          name: " B'z×『真・三國無双８』TVCM"
        },
        {
          url: "https://www.youtube.com/embed/KDCPdWX-hhA",
          name: "『真・三國無双８』日本語版実機プレイ（開発中ver.）"
        },
        {
          url: "https://www.youtube.com/embed/5uuj26lFUrk",
          name: " PS4『真・三國無双８』プロモーションムービー"
        },
        {
          url: "https://www.youtube.com/embed/ZzCqdtj6cfw",
          name: " TVCM②『真・三國無双８』"
        },
        {
          url: "https://www.youtube.com/embed/DLsVwNUor-I",
          name: " WEBCM『真・三國無双８』"
        }
      ]
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
.videos {
  flex: 1;
  margin-top: 3.2rem;
}
.wrapper {
  background: #fff;
  margin-bottom: 0.6rem;
  .iframeVideo {
    width: 100%;
    height: 8rem;
  }
  &_Introduction {
    padding: 0.3rem;
  }
}
</style>