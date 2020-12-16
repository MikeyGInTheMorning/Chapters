<template>
  <div class="menu-bar">
    <div class="menu-bar__menu-items">
      <router-link to="/" class="menu-bar__menu-item menu-color-1">
        <div>
          <font-awesome-icon icon="book-open" />
        </div>
      </router-link>
      <router-link to="/chapter" class="menu-bar__menu-item menu-color-2">
        <div>
          <font-awesome-icon icon="calendar" />
        </div>
      </router-link>
      <div class="menu-bar__menu-item menu-color-3">
        <font-awesome-icon icon="file-alt" />
      </div>
      <div class="menu-bar__menu-item menu-color-4">
        <font-awesome-icon icon="paper-plane" />
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
    width: $circle-radius-medium;
    height: $circle-radius-medium;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    box-shadow: $box-shadow;

    padding: 0.5rem;

    font-size: $font-size-large;
    cursor: pointer;

    &:first-child {
      width: $circle-radius-large;
      height: $circle-radius-large;

      font-size: $font-size-xxlarge;
    }

    &:visited {
      text-decoration: none;
      color: $white;
    }

    &:active {
      color: $white;
      box-shadow: 0px 0px $white;
    }
  }
}

.menu-color-1 {
  background-color: $menu-item-1;
  &:hover {
    background-color: darken($menu-item-1, 7%);
  }
}
.menu-color-2 {
  background-color: $menu-item-2;
  &:hover {
    background-color: darken($menu-item-2, 7%);
  }
}
.menu-color-3 {
  background-color: $menu-item-3;
  &:hover {
    background-color: darken($menu-item-3, 7%);
  }
}
.menu-color-4 {
  background-color: $menu-item-4;
  &:hover {
    background-color: darken($menu-item-4, 7%);
  }
}
</style>
