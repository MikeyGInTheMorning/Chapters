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
      <div class="chapter-nodes" @click="chapterClicked(null)">
        <div v-for="chapter in chapters" :key="chapter.id">
          <ChapterNode
            @click="chapterClicked(chapter)"
            :Chapter="chapter"
            :isSelected="chapter === selectedChapter"
          ></ChapterNode>
        </div>
      </div>
    </div>
    <div class="action">
      <font-awesome-icon icon="plus" @click="addChapter()" />
      <font-awesome-icon
        class="action__delete"
        @click="deleteChapter()"
        icon="plus"
      />
    </div>
    <ChapterEdit
      :Chapter="selectedChapter"
      @editClosed="chapterClicked(null) && getChapters()"
    ></ChapterEdit>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import ChapterNode from "@/components/ChapterNode.vue";
import ChapterEdit from "@/components/ChapterEdit.vue";
import { Chapter } from "../models/Chapter";

@Options({
  components: { ChapterNode, ChapterEdit },
  emits: ["chapterSelected"],
  data: function() {
    return {
      search: "",
      selectedChapter: null,
      selectedChapterDoubleClick: null,
      chapters: [],
      clickCounter: 0,
      timer: null,
    };
  },
  methods: {
    addChapter: function() {
      this.selectedChapter = new Chapter();
    },
    deleteChapter: function() {
      console.log(this.selectedChapter);
      axios
        .post("http://localhost:3000/chapters/remove", this.selectedChapter)
        .then((response: any) => (this.chapters = response.data.chapters));
    },
    chapterClicked: function(event: any) {
      this.clickCounter++;
      if (this.clickCounter == 1) {
        this.selectedChapter = event;
        this.selectedChapterDoubleClick = null;
        this.timer = setTimeout(() => {
          this.clickCounter = 0;
        }, 250);
      } else {
        clearTimeout(this.timer);
        this.selectedChapterDoubleClick = event;
        this.$emit("chapterSelected", event);
        this.clickCounter = 0;
      }
    },
    getChapters: function() {
      axios
        .get("http://localhost:3000/chapters")
        .then((response: any) => (this.chapters = response.data.chapters));
    },
  }, 
  mounted: function() {
    this.getChapters()
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

.node {
}

$action-distance: 7rem;
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
