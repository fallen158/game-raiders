<template>
    <div>
        <div class="introduction" v-for="message in messages" :key="message.id"  v-loading="loading">
           <div class="loading" v-show="isLoading">
                <div class="introduction_title" >
                    <h3>{{message.title}}</h3>
                </div>
                <div class="introduction_cneter">
                    <p class="cneter_title">
                        <strong>{{message.heading}}</strong>
                    </p>
                    <p class="cneter_dettail">
                        <strong>{{message.center}}</strong>
                    </p>
                    <p>
                        <img :src="message.image" alt="" class="cneter_image">
                    </p>
                    <p class="cneter_dettail">{{message.detail}}</p>
                    <p class="cneter_dettail">
                        <strong>{{message.center2}}</strong>
                    </p>
                    <p>
                        <img :src="message.image2" alt="" class="cneter_image">
                    </p>
                    <p class="cneter_dettail">{{message.detail2}}</p>
                </div>
           </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["messages"],
  data() {
    return {
      loading: true,
      isLoading: false
    };
  },
  created() {
    let time = setInterval(item => {
      this.loading = false;
      this.isLoading = true;
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.introduction {
  margin-top: 3.3rem;
  background: #fff;
  padding: 0 0.3rem;
  height: 100vh;
  &_title {
    text-align: center;
    padding: 0.5rem;
  }
}

.cneter_dettail {
  padding: 0.3rem 0;
}
.cneter_title {
  color: #d26217;
  font-weight: 700;
  margin: 0.3rem 0;
}
.cneter_image {
  width: 100%;
  height: 100%;
}
</style>