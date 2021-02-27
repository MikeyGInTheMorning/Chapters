<template>
  <div class="chapters">
    <div class="chapters-content">
      <div class="search-bar">
        <input
          type="text"
          class="search-bar__search"
          placeholder="Quick Search"
          v-model="search"
        />
      </div>
      <div class="piece-list">
        <div class="piece-list__header-row">
          Id
        </div>
        <div class="piece-list__header-row">
          Title
        </div>
        <div class="piece-list__header-row">
          Actions
        </div>
        <PieceRow
          v-for="piece in pieces"
          :key="piece._id"
          :piece="piece"
          class="piece-list__row"
        ></PieceRow>
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
import PieceRow from "../components/PieceRow.vue";
import SaveEventHub from "../events/saveEvent"

@Options({
  props: ["parentId"],
  components: { PieceRow },
  data: function() {
    return {
      search: "",
      pieces: [],
    };
  },
  methods: {
    getPieces: function() {
      if (!this.parentId) {
        console.error("Missing ParentId being passed into Pieces.vue");
        return;
      }

      DataService.ChapterPropertyNodes.getAllByParent(
        this.parentId,
        (response: ChapterPropertyNode[]) => {
          this.pieces = response;
        }
      );
    },
    savePieces: function() {
      DataService.ChapterPropertyNodes.getAllByParent(
        this.parentId,
        (res: any) => this.getPieces()
      );
    },
  },
  computed: {},
  created: function() {
    // const hub:any = SaveEventHub;
    // hub.$on('save', this.savePieces());
  },
})
export default class Chapters extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.chapters {
  width: 100%;
  height: 100%;
}

.chapters-content {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
}

.search-bar {
  width: 100%;
  height: 7rem;
  padding-left: 1rem;

  display: flex;
  align-items: center;

  &__search {
    height: 5rem;
    width: 40%;

    border-radius: 5px;
    border: 2px solid $shadow;
  }
}

.piece-list {
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: grid;
  grid-template-columns: 10rem 10fr 2fr;
  grid-auto-rows: minmax(auto, 4rem);
  grid-auto-flow: row;
  align-items: center;

  &__header-row {
    height: 4rem;
    background: $node-main-2-border;
    color: $white;
    font-size: $font-size-xlarge;
    font-weight: bolder;

    padding: 1rem;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  &__row {
    height: 1rem;
    grid-column: 1/-1;
  }
}

$grid-template-radius: 15rem;
.chapter-nodes {
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax($grid-template-radius, 1fr));

  grid-auto-rows: $grid-template-radius;
  grid-gap: 2rem;

  overflow-y: auto;
}

$action-distance: 5vw;
.action {
  position: absolute;
  bottom: $action-distance;
  right: $action-distance;

  height: $circle-radius-large;
  width: $circle-radius-large;

  font-size: $font-size-xxlarge;
  color: $white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: $menu-item-1;
  box-shadow: $box-shadow;

  cursor: pointer;

  &:hover {
    background-color: darken($menu-item-1, 7%);
  }

  &:active {
    box-shadow: 0px 0px $white;
  }
  &__delete {
    right: 5rem;
    background: red;
  }
}

.selectedChapter {
  background: red;
  color: white;
}
</style>
