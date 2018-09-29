import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import api from "./util/api.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bannerImgSrc: [],
    personalized: [],
  },
  mutations: {
    setBannerData(state, payload) {
      let bannerImgSrc = [];
      payload.data.banners.forEach(element => {
        bannerImgSrc.push(element.picUrl)
      });
      state.bannerImgSrc = bannerImgSrc
    },
    setPersonalized(state, payload) {
      state.personalized = payload.data.result
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
    },
    getPersonalized(context) {
      axios
        .get(api.personalized +"?limit=6")
        .then(data => {
          context.commit("setPersonalized",data)
        })
        .catch(function(err) {
          alert(err);
        })
    }
  }
});
