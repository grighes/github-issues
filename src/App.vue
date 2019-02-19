<template>
  <div id="app" class="font-sans h-full">
    <div class="bg"></div>
    <div class="title-wrapper container mx-auto tracking-wide pb-4 px-2 sm:px-0">
      <h1 class="text-4xl">Github Issues</h1>
      <p class="pt-1">Here you can find your repo and favorite your issues.</p>
    </div>
    <div id="nav" class="container mx-auto flex justify-around">
      <router-link class="btn" to="/">Home</router-link>
      <router-link class="btn" to="/favorites">Favorites</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding-top: 12em;
}
.bg {
  background-color: #637de8;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
}
.title-wrapper {
  color: #494949;
}
#nav {
  width: 320px;
}
.btn {
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.2rem;
  border: 2px solid #fff;
  border-radius: 40px;
  padding: 10px 40px 8px;
  text-decoration: none;
  transition: all 0.3s ease;
  height: 45px;
  justify-content: center;
  align-items: center;
  display: flex;
  &:hover {
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
    color: #494949;
  }
}
</style>
