<template>
  <div id="app">
    <div class="head"></div>
    <div class="pages">
      <transition name="slide">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
.head{
  width: 100%;
  height: 6%;
  background: black;
}
.pages{
  width: 100%;
  height: 94%;
  background: #fff;
}
.slide-fade{
  position: fixed;left:0;right: 0;
  width: 100%;
  background-color: white;
}
.slide-fade-enter, .slide-fade-leave-to
{
  left:0;top: 0;right: 0;
  position: absolute;
  transform:translateX(-500px) translateY(-500px) rotate(-150deg) scale(0.5);
  opacity:1;
}
.slide-fade-enter-active {
  background-color: white;
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s ease;
  background-color: white;
  transform:translateX(500px) translateY(500px) rotate(150deg) scale(1) ;
  z-index: 100;
}
</style>
