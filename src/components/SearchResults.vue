<template>
  <div class="container mb-12">
    <repo-list :repoList="repoList"/>
  </div>
</template>

<script>
import { fetchIssues } from "../../services/DataServices";
import RepoList from "./RepoList.vue";

export default {
  components: {
    RepoList
  },
  props: {
    repoList: Array
  }
};
</script>
