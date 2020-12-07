<template>
 <div class="chapter-node">
    <div class="chapter-node__title">
      {{Title}}
    </div>
    <div class="chapter-node__content">
      {{Description}}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    Title: String,
    Description: String
  }
})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
@import './src/styles/main.scss';

.chapter-node {
  background-color: $node-main;
  width: 25em;
  height: 25rem;

  border-radius: 50%;
  padding: 4rem;
  box-shadow: 15% red;

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;

  &__title {
    font-size: 1.7rem;
  }

  &__title {
    font-size: 1.2rem;
  }

  &:hover{
    background: green;
  }
}
</style>
