<template>
    <div id="app" class="bg-secondary">
        <router-view></router-view> 
    </div>
</template>

<script>
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


export default {
  name: 'App',
      use: {
        'BootstrapVue': BootstrapVue,
        'IconsPlugin': IconsPlugin,  
    },

}
</script>

<style>
#app {
        font-family: 'Roboto', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100vh;
        min-width: 100%;
        overflow-x: hidden;
    }
    body{
        width: 100%;
        height: 100%;
    }
</style>


