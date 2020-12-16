<template>
  <div class="chapter-edit" :class="{ closed: Chapter == null }">
    <div class="panel--content">
      <button class="closeBtn" @click="closeEdit()">
        <font-awesome-icon icon="plus" />
      </button>
      <div class="panel--slot">
        <input type="text" class="chapter-edit__title" v-model="chap.Title" />
        <input
          type="text"
          class="chapter-edit__description"
          v-model="chap.Description"
        />
        <div class="pieces">
          <div v-for="piece in chap.Pieces" :key="piece.id" class="piece">
            <input type="text" v-model="piece.Title" />
            <input type="text" v-model="piece.Description" />
          </div>
        </div>
        <button @click="saveEdit()">Save</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

@Options({
  props: {
    Chapter: Object,
  },
  emits: ["editClosed"],
  methods: {
    closeEdit: function() {
      this.$emit("editClosed");
    },
    saveEdit: function() {
      axios
        .post("http://localhost:3000/chapters/save", this.Chapter)
        .then((response: any) => console.log(response));
    },
  },
  computed: {
    chap: function() {
      return this.Chapter
        ? this.Chapter
        : { Title: "", Description: "", Pieces: [] };
    },
  },
})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";
.closed {
  height: 0px;
  width: 0px;
  overflow: hidden;
}

.chapter-edit {
  position: absolute;
  top: 25%;
  right: 0;
  bottom: 25%;
  min-width: 25rem;
  background: white;
  border-top-left-radius: 50rem;
  border-bottom-left-radius: 50rem;

  border-left: 1rem solid $node-main;
}

.panel--content {
  padding: 4rem 2rem 4rem 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.panel--slot {
  flex-grow: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.closeBtn {
  align-self: flex-end;
  transform: rotate(45deg);
  border: none;
  outline:none;
  background: none;

  font-size: $font-size-xxlarge;
  color: $dark-grey;

  &:hover{
    cursor: pointer;
  }
}

@keyframes fadein {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
</style>
