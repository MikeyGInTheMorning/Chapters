<template>
  <div class="menu-bar">
    <div class="menu-bar__menu-items">
      <div class="menu-bar__menu-item menu-color-1">
        Logo
      </div>
      <div class="menu-bar__menu-item menu-color-2">
       <font-awesome-icon icon="user-secret" />
      </div>
      <div class="menu-bar__menu-item menu-color-3">
        2
      </div>
      <div class="menu-bar__menu-item menu-color-4">
        3
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";
.menu-bar {
  height: 100%;
  width: 10rem;

  padding: 1rem;

  &__menu-items {
    height: 33%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    
    color: $white;
    font-size: 1.2rem;
    font-weight: bolder;
  }

  &__menu-item {
    background-color: white;
    width: 5rem;
    height: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    box-shadow: 0px 3px $shadow;

    padding: 0.5rem;

    &:first-child {
      width: 8rem;
      height: 8rem;

      font-size: 1.5rem;
    }
    
    &:active{
      box-shadow: 0px 0px $white;
    }
  }
}

.menu-color-1 {
  background-color: $menu-item-1;
  &:hover {
    background-color: darken($menu-item-1, 5%);
  }
}
.menu-color-2 {
  background-color: $menu-item-2;
  &:hover {
    background-color: darken($menu-item-2, 5%);
  }
}
.menu-color-3 {
  background-color: $menu-item-3;
  &:hover {
    background-color: darken($menu-item-3, 5%);
  }
}
.menu-color-4 {
  background-color: $menu-item-4;
  &:hover {
    background-color: darken($menu-item-4, 5%);
  }
}
</style>
