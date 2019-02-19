<template>
  <div class="issue-list">
    <div class="animated fadeIn fixed z-50 pin overflow-auto bg-color flex">
      <div
        class="issue-container overflow-scroll animated fadeInUp fixed shadow-inner pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white w-full md:shadow flex flex-col"
      >
        <ul class="issue-wrapper container h-48 mx-auto list-reset max-w-lg" v-if="issueList">
          <li
            class="flex items-center px-4 py-3 flow-column flex-col sm:flex-row justify-between"
            v-for="(issues, index) in issueList"
            :key="index"
          >
            <div class="flex w-full sm:w-3/4">
              <p class="capitalize pt-2 w-full md:w-3/4 text-left">{{ issues.title }}</p>
              <p
                class="capitalize pt-2 w-full md:w-1/4 text-center flex items-center justify-center"
              >{{ issues.state }}</p>
            </div>
            <button
              @click="addToFavorites(issues, $event)"
              class="transition w-full md:w-24 h-10 bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center mt-4 sm:mt-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path
                  d="M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"
                ></path>
              </svg>
              <span class="pl-2">Star</span>
            </button>
          </li>
        </ul>
        <div v-else>
          <p>No issues found</p>
        </div>
        <span @click="handleToggleModal" class="absolute pin-t pin-r pt-4 px-4">
          <svg
            class="h-12 w-12 text-grey hover:text-grey-darkest"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path
              d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
            ></path>
          </svg>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favoriteIssues: [],
      modal: false
    };
  },
  props: {
    issueList: [Array, Boolean]
  },
  updated() {
    this.$nextTick().then(() => {
      let allElements = Array.from(document.getElementsByClassName("fav"));
      allElements.map(
        el => (el.classList.remove("disabled"), el.removeAttribute("disabled"))
      );
    });
  },
  mounted() {
    localStorage.getItem("git_fav_issues") !== null
      ? this.getLocalStorage()
      : false;
  },
  methods: {
    addToFavorites(issues, event) {
      let evtTarget = event.currentTarget;
      evtTarget.classList.add("disabled");
      evtTarget.setAttribute("disabled", "disabled");
      this.favoriteIssues.push(issues);
      localStorage.setItem(
        "git_fav_issues",
        JSON.stringify(this.favoriteIssues)
      );
    },
    handleToggleModal() {
      this.$emit("toggleModal", (this.modal = false));
    },
    getLocalStorage() {
      localStorage.getItem("git_fav_issues").length > 0
        ? (this.favoriteIssues = JSON.parse(
            localStorage.getItem("git_fav_issues")
          ))
        : false;
    }
  }
};
</script>

<style lang="scss" scoped>
.issue-list {
  display: flex;
  .transition {
    transition: 0.3s ease-in;
  }
  .list {
    cursor: pointer;
    &:hover {
      background-color: #777;
    }
  }
  .disabled {
    opacity: 0.2;
    cursor: default;
  }
  .bg-color {
    background-color: rgba(0, 0, 0, 0.4);
  }
  .issue-container {
    height: 20em;
  }
}
</style>
