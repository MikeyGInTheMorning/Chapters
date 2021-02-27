<template>
  <div class="chapter">
    <div class="chapter--header">
      <div class="chapter--header--label">
        {{ chapter.Title }}
      </div>
    </div>
    <div class="chapter--content">
      <div class="chapter-description">
        <textarea
          placeholder="Chapter Description..."
          class="chapter-description--input"
          v-model="chapter.Description"
        />
      </div>
      <div class="button-bar">
        <div class="property-bar">
          <div class="property-bar__button" @click="propertyClicked('pieces')">
            <font-awesome-icon icon="list" />
          </div>
          <div class="property-bar__button" @click="propertyClicked('budget')">
            <font-awesome-icon icon="money-bill-wave" />
          </div>
          <div class="property-bar__button" @click="propertyClicked('notes')">
            <font-awesome-icon icon="sticky-note" />
          </div>
        </div>
        <div class="action-bar">
          <div class="action-bar__button" @click="saveEdit()">
            <font-awesome-icon icon="save" />
          </div>
          <div class="action-bar__button" @click="addProperty()">
            <font-awesome-icon icon="plus" />
          </div>
          <div class="action-bar__button" @click="propertyClicked('')">
            <font-awesome-icon icon="plus" />
          </div>
        </div>
      </div>
      <div class="property-selected-container">
        <div class="property-selected-container__label">
          {{ propertySelected }}
        </div>
        <div
          v-if="propertySelected == 'pieces'"
          class="property-selected pieces-selected"
        >
          <Pieces :parentId="chapterId"></Pieces>
        </div>
        <div
          v-else-if="propertySelected == 'budget'"
          class="property-selected budget-selected"
        >
          Buget
        </div>
        <div v-else-if="propertySelected == 'notes'" class="property-selected">
          Notes
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";
import ChapterNode from "@/components/ChapterNode.vue";
import Pieces from "@/components/Pieces.vue";
import Chapter from "../models/Chapter";
import DataService from "../services/dataService";
import SlideOut from "../components/SlideOut.vue";
import SaveEventHub from "../events/saveEvent"

@Options({
  components: { ChapterNode, SlideOut, Pieces },
  props: ["chapterId"],
  data: function() {
    return {
      chapter: new Chapter(),
      propertySelected: "",
    };
  },
  methods: {
    propertyClicked: function(data: string) {
      this.propertySelected = data;
    },
    removeProperty: function() {
      DataService.ChapterPropertyNodes.delete(this.selectedChapter, () =>
        this.getChapters()
      );
    },
    addProperty: function() {
      //DataService.ChapterPropertyNodes.save(this.selectedChapter, () => this.getChapters());
    },
    initializeChapter: function() {
      if (this.chapterId) {
        DataService.Chapters.getOne(
          this.chapterId,
          (response: Chapter) => (this.chapter = response)
        );
      } else {
        this.chapter = new Chapter();
      }
    },
    saveEdit: function() {
      DataService.Chapters.save(this.chapter, (response: Chapter) => {
        this.chapter = response;
        SaveEventHub.$emit('save');
      });
    },
  },
  computed: {},
  mounted: function() {
    this.initializeChapter();
  },
})
export default class Chapters extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.chapter {
  width: 100%;
  height: 100%;

  display: grid;
  flex-flow: column;
  grid-template-rows: 1fr 10fr;

  &--content {
    background: $white;
    padding: 2rem;

    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
  }

  &--header {
    background: $lighter-grey;
    border-bottom: 0.25rem solid $node-main-2;
    padding: 2rem;

    display: flex;
    align-items: flex-end;

    &--label {
      font-size: $font-size-xxlarge;
      color: $dark-grey;
    }
  }
}

.chapter-description {
  width: 100%;
  border-radius: 5rem;
  display: flex;

  &--input {
    padding: 1rem;
    height: 10rem;
    width: 100%;
    resize: none;

    font-size: $font-size-large;
    font-family: $font-family-2;
    border-color: $node-main-2-border;

    &:focus {
      outline: none !important;
      border-color: darken($color: $node-main-2-border, $amount: 15%);
    }
  }
}

.button-bar {
  width: 100%;
  padding: 2rem 0rem;

  display: flex;
  justify-content: space-between;
}

.property-bar {
  display: grid;
  justify-content: start;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  gap: 1rem;

  &__button {
    height: $circle-radius-medium;
    width: $circle-radius-medium;

    font-size: $font-size-xlarge;
    color: $white;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: $menu-item-sub-1;
    box-shadow: $box-shadow;

    cursor: pointer;

    &:hover {
      background-color: darken($menu-item-1, 7%);
    }

    &:active {
      box-shadow: 0px 0px $white;
    }
  }
}

.action-bar {
  display: grid;
  justify-content: start;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  gap: 1rem;

  &__button {
    height: $circle-radius-medium;
    width: $circle-radius-medium;

    font-size: $font-size-xlarge;
    color: $white;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: $menu-item-sub-1;
    box-shadow: $box-shadow;

    cursor: pointer;

    &:hover {
      background-color: darken($menu-item-1, 7%);
    }

    &:active {
      box-shadow: 0px 0px $white;
    }

    &:last-of-type {
      background: $grey;
      transform: rotate(45deg);
    }
  }
}

.property-selected-container {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 3rem 1fr;

  &__label {
    display: flex;
    align-items: center;
    font-size: $font-size-xlarge;
    color: $dark-grey;
    text-transform: capitalize;
  }
}

.pieces-selected {
  border: red solid;
}
</style>
