<template>
  <div class="chapter-edit" :class="{ closed: Chapter == null }">
    <button @click="closeEdit()">Close</button>
    <input type="text" class="chapter-edit__title" v-model="chap.Title" />
    <input type="text" class="chapter-edit__description" v-model="chap.Description"/>
    <div class="pieces">
      <div v-for="piece in chap.Pieces" :key="piece.id" class="piece">
        <input type="text" v-model="piece.Title" />
        <input type="text" v-model="piece.Description" />
      </div>
    </div>
    <button @click="saveEdit()">Save</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import axios from "axios";

@Options({
  props: {
    Chapter: Object    
  },
  emits: ['editClosed'],
  methods: {
    closeEdit:function(){
      this.$emit('editClosed')
    },
    saveEdit: function(){
      axios
      .post('http://localhost:3000/chapters/save', this.Chapter)
      .then((response:any) => (
          console.log(response)
        ))
    }
  },
  computed: {
    chap: function(){
      return this.Chapter ? this.Chapter : {Title: '', Description: '', Pieces: []}
    }
  }
})
export default class HelloWorld extends Vue {}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";
.closed{
  height: 0px;
  width: 0px;
  overflow: hidden;
}
.chapter-edit {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  min-width: 50rem;
  background: white;

  border-right: 1rem solid $node-main;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  &__title {
    min-width: 15rem;
  }

  &__description {
    min-width: 10rem;
  }
}

.pieces {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}

.piece {
  border-bottom: .5rem solid $node-main;
  display: flex;

  &:last-child{
    border-bottom: none;
  }
}
</style>
