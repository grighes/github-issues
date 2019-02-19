<template>
  <div class="home">
    <app-content/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppContent from "@/components/AppContent.vue";

export default {
  name: "home",
  components: {
    AppContent
  }
};
</script>
