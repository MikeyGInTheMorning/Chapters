<template>
  <div class="piece-row">
    <div class="piece-row__container">
      <div class="selected"></div>
      <div class="title">{{piece.Title}}</div>
      <div class="actions">
          
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import ChapterNode from "@/components/ChapterNode.vue";
import SlideOut from "../components/SlideOut.vue";
import DataService from "../services/dataService";
import ChapterPropertyNode from "src/models/ChapterPropertyNode";

@Options({
  props: ["piece"],
  components: {},
  data: function() {
    return {
      search: "",
      pieces: [],
    };
  },
})
export default class Chapters extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.piece-row {
  width: 100%;
  height: 100%;

  &__container {
      display: grid;

      grid-auto-columns: 2rem 1fr 3rem;
      grid-row: 2rem;
  }
}
</style>
