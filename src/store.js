import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "./util/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bannerImgSrc: []
  },
  mutations: {
    setBannerData(state, payload) {
      let bannerImgSrc = [];
      payload.data.banners.forEach(element => {
        bannerImgSrc.push(element.picUrl)
      });
      state.bannerImgSrc = bannerImgSrc
    }
  },
  actions: {
    getBannerData(context) {
      axios
        .get(api.banner)
        .then(data => {
          context.commit("setBannerData", data);
        })
        .catch(function(err) {
          alert(err);
        });
    }
  }
});
