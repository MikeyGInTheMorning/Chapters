<template>
  <div class="piece-row">
    <div class="piece-row__container">
      <div class="selected">
        <input
          type="checkbox"
          name="selected"
          id="selected"
          v-model="isSelected"
        />
      </div>
      <div class="title"><input type="text" v-model="piece.Title"></div>
      <div class="actions"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: ["piece"],
  components: {},
  data: function() {
    return {
      isSelected: "",
    };
  },
})
export default class Chapters extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.piece-row {
    height: 3rem;
    
  &__container {
    display: grid;
    grid-auto-columns: 2rem 1fr 3rem;
    grid-auto-flow: column;
    align-items: center;
  }
}

.title{
    justify-self: start;
}
</style>
