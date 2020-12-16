<template>
  <div
    class="slide-out"
    :class="{ opening: showSlideOut, closing: !showSlideOut }"
  >
    <div class="slideout" v-if="showSlideOut">
      <div class="slideout__header">
        <div class="header__label">
          {{ label }}
        </div>
        <div class="header__close" @click="close()">
          Exit
        </div>
      </div>
      <div class="slideout__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "showSlideOut"],
  methods: {
    close: function() {
      this.$emit("closed", "D");
    },
  },
};
</script>

<style scoped lang="scss">
@import "./src/styles/main.scss";

.slideout-parent {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: transparent;
  z-index: 12;
}

.opening {
  animation-name: onSlideOutOpen;
  animation-duration: 0.5s;
}

.closing {
  animation-name: onSlideOutClose;
  animation-duration: 0.5s;
}

@keyframes onSlideOutOpen {
  0% {
    width: 0%;
    visibility: 0;
    opacity: 0;
  }
  100% {
    width: 40%;
    visibility: 100%;
    opacity: 100%;
  }
}

@keyframes onSlideOutClose {
  0% {
    width: 40%;
    visibility: 100%;
    opacity: 100%;
  }
  100% {
    width: 0%;
    visibility: 0%;
    opacity: 0%;
  }
}

.slideout {
  position: absolute;
  background-color: #ebebeb;
  display: flex;

  top: 0;
  right: 0;
  bottom: 0;
  
  border-top-left-radius: 50rem;
  border-bottom-left-radius: 50rem;

  border-left: 1rem solid $node-main;
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0.2rem 0.5rem;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
