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
      <div class="chapter-nodes">
        <div v-for="chapter in chapterz" :key="chapter.id">
          <ChapterNode
            :Title="chapter.Title"
            :Description="chapter.Description"
          ></ChapterNode>
        </div>
      </div>
    </div>
    <div class="action">
      <font-awesome-icon icon="plus" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChapterNode from "@/components/ChapterNode.vue";

@Options({
  components: { ChapterNode },
  data: function() {
    return {
      search: "",
      chapters: [
        {
          id: 1,
          Title: "Physical Health",
          Description: "Everyting to do for physical health",
        },
        {
          id: 2,
          Title: "Personal Projects",
          Description: "",
        },
        {
          id: 3,
          Title: "Spirituality",
          Description: "",
        },
        {
          id: 1,
          Title: "Physical Health",
          Description: "Everyting to do for physical health",
        },
        {
          id: 2,
          Title: "Personal Projects",
          Description: "",
        },
        {
          id: 3,
          Title: "Spirituality",
          Description: "",
        },
        {
          id: 1,
          Title: "Physical Health",
          Description: "Everyting to do for physical health",
        },
        {
          id: 2,
          Title: "Personal Projects",
          Description: "",
        },
        {
          id: 3,
          Title: "Spirituality",
          Description: "",
        },
        {
          id: 1,
          Title: "Physical Health",
          Description: "Everyting to do for physical health",
        },
        {
          id: 2,
          Title: "Personal Projects",
          Description: "",
        },
        {
          id: 3,
          Title: "Spirituality",
          Description: "",
        },
      ],
    };
  },
  computed: {
    chapterz: function() {
      const arr = this.chapters;
      for (let index = 0; index < 15; index++) {
        arr.push(this.chapters);
      }
      return arr;
    },
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

.chapter-nodes {
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  overflow-y: auto;
}

.node {
  padding: 5rem;
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
</style>
