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
        <div v-for="chapter in chapterz" :key="chapter.id">
          <ChapterNode
            @click="chapterClicked(chapter)"
            :Chapter="chapter"
            :isSelected="chapter === selectedChapter"
          ></ChapterNode>
        </div>
      </div>
    </div>
    <div class="action" @click="addChapter()">
      <font-awesome-icon icon="plus" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChapterNode from "@/components/ChapterNode.vue";

@Options({
  components: { ChapterNode },
  emits: ["chapterSelected"],
  data: function() {
    return {
      search: "",
      selectedChapter: null,
      selectedChapterDoubleClick: null,
      chapters: [
        {
          id: 1,
          Title: "Physical Health",
          Description: "Everyting to do for physical health"
        },
        {
          id: 2,
          Title: "Personal Projects",
          Description: ""
        },
        {
          id: 3,
          Title: "Spirituality",
          Description: ""
        },
        {
          id: 1,
          Title: "Physical Health",
          Description: "Everyting to do for physical health"
        },
        {
          id: 2,
          Title: "Personal Projects",
          Description: ""
        },
        {
          id: 3,
          Title: "Spirituality",
          Description: ""
        }
      ],
      clickCounter: 0,
      timer: null
    };
  },
  methods: {
    addChapter: function() {
      this.chapters.push({
        id: this.chapters.length + 1,
        Title: "Test",
        Description: "Hello World"
      });
    },
    chapterClicked: function(event: any) {
      this.clickCounter++
      if (this.clickCounter == 1) {
        this.selectedChapter = event
        this.selectedChapterDoubleClick = null
        this.timer = setTimeout(() => {
          this.clickCounter = 0;
        }, 250);
      } else {
        clearTimeout(this.timer);
        this.selectedChapterDoubleClick = event
        this.$emit("chapterSelected", event)
        this.clickCounter = 0
      }
    }
  },
  computed: {
    chapterz: function() {
      const arr = this.chapters
      let id = this.chapters.length
      for (let index = 0; index < 25; index++) {
        const curr = { ...this.chapters[index]}
        id++
        curr.id = id
        arr.push(curr)
      }
      return arr;
    }
  }
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
}

.selectedChapter {
  background: red;
  color: white;
}
</style>
