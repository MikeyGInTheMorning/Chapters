<template>
  <div class="chapter-node" :class="{ selected: isSelected }">
    <div class="chapter-node__title">
      {{ Title }}
    </div>
    <div class="chapter-node__content">
      {{ Description }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    Title: String,
    Description: String,
    isSelected: Boolean
  }
})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.chapter-node {
  background-color: $node-main;
  width: 100%;
  height: 100%;

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

  &:hover {
    background: green;
  }
}

.selected {
  background: red;
}
</style>
