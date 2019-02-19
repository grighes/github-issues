<template>
  <div>
    <transition-group
      appear
      name="repo-list"
      tag="ul"
      class="repo-list list-reset shadow-md rounded mt-12 bg-white w-full sm:w-2/3 mx-auto animated fadeIn"
      v-if="repoList.length"
    >
      <li
        class="px-4 py-3 tracking-normal animated fadeIn"
        v-for="(repos, index) in repoList"
        :key="index + 0"
      >
        <a class="cursor-pointer no-underline" :href="repos.homepage" target="_blank">
          <p class="capitalize text-left">{{ repos.name }}</p>
        </a>
        <a class="cursor-pointer no-underline" target="_blank" @click="handler(repos)">
          <p class="text-left pt-2">{{ repos.open_issues }} issues</p>
        </a>
        <p class="text-left pt-2">{{ repos.description }}</p>
      </li>
    </transition-group>
    <issue-list :issueList="issueList" v-if="modal" @toggleModal="modal = $event"/>
  </div>
</template>

<script>
import { fetchIssues } from "../../services/DataServices";
import IssueList from "./IssueList.vue";

export default {
  components: {
    IssueList
  },
  data() {
    return {
      issueList: [],
      modal: false
    };
  },
  props: {
    repoList: Array
  },
  methods: {
    getDetails(repos) {
      repos.open_issues
        ? this.getIssueList(repos.full_name)
        : (this.issueList = false);
    },
    getIssueList(full_name) {
      fetchIssues(full_name).then(res => {
        this.issueList = res.data;
      });
    },
    toggleModal() {
      this.modal = !this.modal;
    },
    handler(repos) {
      this.getDetails(repos);
      this.toggleModal();
    }
  }
};
</script>

<style lang="scss" scoped>
.repo-list {
  li {
    border-bottom: 1px solid #637de8;
  }
  a {
    color: #000;
  }
  a:hover {
    transition: 0.3s ease-in;
    text-decoration: underline;
    color: #494949;
  }
}
</style>
