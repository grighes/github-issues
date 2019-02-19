<template>
  <div class="favorites">
    <div class="container mx-auto mb-12">
      <div
        class="filters w-full sm:w-2/3 flex flex-col sm:flex-row justify-between mx-auto pt-4 px-4 sm:px-0"
      >
        <input
          class="w-full sm:w-64 rounded p-3 shadow-md mb-3 sm:mb-0"
          type="text"
          @click="filterByState = ''"
          v-model="filterById"
          placeholder="Filter by id..."
          :disabled="favorites.length === 0"
        >
        
        <select
          class="rounded w-full sm:w-64 p-3 shadow-md mb-3 sm:mb-0"
          name="filterByState"
          :disabled="favorites.length === 0"
          v-model="filterByState"
        >
          <option default value>Please select one</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
        <button
          class="text-white w-full sm:w-64"
          @click="clearAll"
          :disabled="favorites.length === 0"
        >Clear All Favs</button>
      </div>
      <div class="fav-results mx-auto">
        <ul
          class="list-reset shadow-md rounded mt-12 bg-white w-full sm:w-2/3 mx-auto animated fadeIn"
          v-if="favorites.length"
        >
          <li
            class="text-left px-4 py-3 tracking-normal animated fadeIn"
            v-for="(favIssues, index) in filteredItens"
            :key="index"
          >
            <p class="capitalize pt-2">{{ favIssues.id }}</p>
            <p class="capitalize pt-2">{{ favIssues.title }}</p>
            <p class="capitalize pt-2">{{ favIssues.state }}</p>
            <p class="capitalize pt-2 truncate">{{ favIssues.body }}</p>
          </li>
        </ul>
        <div class="px-4 sm:px-0 mx-auto">
          <p
            class="flex sm:w-2/3 mx-auto sm:w-2/3 mt-12 shadow-md rounded bg-white container animated fadeIn text-left px-4 py-3"
            v-if="favorites.length === 0"
          >No favs left =(</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [],
      filterById: "",
      filterByState: ""
    };
  },
  mounted() {
    localStorage.getItem("git_fav_issues") !== null
      ? this.getFavorites()
      : false;
  },
  computed: {
    filteredItens() {
      let filteredItens;
      let filter;
      if (this.filterByState.length) {
        filteredItens = this.favorites.filter(
          el => el.state === this.filterByState
        );
      } else {
        filter = new RegExp(this.filterById, "i");
        filteredItens = this.favorites.filter(el =>
          String(el.id).match(filter)
        );
      }
      return filteredItens;
    }
  },
  methods: {
    getFavorites() {
      localStorage.getItem("git_fav_issues").length
        ? (this.favorites = JSON.parse(localStorage.getItem("git_fav_issues")))
        : false;
    },
    clearAll() {
      localStorage.setItem("git_fav_issues", "");
      this.favorites = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.fav-results {
  li {
    border-bottom: 1px solid #637de8;
  }
}
</style>
