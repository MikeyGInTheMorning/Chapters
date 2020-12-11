<template>
  <div class="chapter-node" :class="{ selected: isSelected }">
    <div class="chapter-node__title">
      {{ Chapter.Title }}
    </div>
    <div class="chapter-node__content">
      {{ Chapter.Description }}
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    Chapter: Object,
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

  border: .25rem solid transparent;
  border-radius: 50%;
  padding: 4rem;

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
  border: .25rem solid $node-main-border;
  border-radius: 50%;
}
</style>
