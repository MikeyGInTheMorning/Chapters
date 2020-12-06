<template>
 <ChapterNode></ChapterNode>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChapterNode from '@/components/ChapterNode.vue'

@Options({
  components: {ChapterNode},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import './src/styles/main.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: linear-gradient(
      252.44deg,
      rgba(218, 218, 218, 0) 0%,
      #fafafa 100%
    ),
    #f1f1f1;

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
}


</style>
