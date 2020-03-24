<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$column-gap: 0.3rem;
$section-padding: 0.8rem 1.5rem;
@import "../node_modules/bulma/bulma.sass";
@import url("https://fonts.googleapis.com/css?family=Kalam");

body {
  user-select: none;
  background-image: url("/background.jpg");
  background-position: center;
}
h1 {
  font-family: "Kalam", cursive;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.white-color {
  color: white;
}
</style>
