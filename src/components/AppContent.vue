<template>
  <div class="container mx-auto flex justify-center flex-wrap">
    <form class="form" @submit.prevent="getData(repo)" @keydown.esc="repo = ''">
      <input
        class="repo rounded p-3 shadow-md w-5/6 sm:w-full"
        type="text"
        v-model="repo"
        placeholder="Search repos here..."
      >
      <scale-loader class="pt-10" :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
    </form>
    <search-results :repoList="repoList"/>
  </div>
</template>

<script>
import { fetchData } from "../../services/DataServices.js";
import SearchResults from "../components/SearchResults";
import ScaleLoader from "vue-spinner/src/ScaleLoader.vue";

export default {
  components: {
    SearchResults,
    ScaleLoader
  },
  data() {
    return {
      repo: "",
      repoList: [],
      loading: false,
      color: "#3AB982",
      height: "35px",
      width: "4px",
      margin: "2px"
    };
  },
  methods: {
    getData(repo) {
      this.repo = "";
      this.loading = true;
      fetchData(repo).then(res => {
        this.loading = false;
        this.repoList = res.data.items;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  padding-top: 1em;
  width: 400px;
}
</style>
