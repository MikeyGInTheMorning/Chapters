<template>
  <div class="chapters">
    <div class="search-bar">
      <input
        type="text"
        class="search-bar__search"
        placeholder="Quick Search"
        v-model="search"
      />
    </div>
    <div class="chapter-nodes">
      <div v-for="chapter in chapters" :key="chapter.id">
        <ChapterNode
          :Title="chapter.Title"
          :Description="chapter.Description"
        ></ChapterNode>
      </div>
    </div>
    <div class="action">
      +
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
})
export default class Chapters extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.chapters {
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

.action {
  position: abolute;
  bottom: 25rem;
  left: 25rem;
  height: 15rem;
  width: 15rem;
  font-size: 5rem;

  border-radius: 50%;
  background-color: $menu-item-1;
}
</style>
