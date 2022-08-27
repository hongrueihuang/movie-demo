<template>
  <nav class="py-3 bg-info text-white w-100 position-relative navbar">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-outline-light outline-none shadow-none bg-info btn-toggle-menu"
        :class="{show : isLeftMenu}"
        @click="isLeftMenu = !isLeftMenu"
      >
        <span class="menu-icon"></span>
      </button>
      <h2>The movie</h2>
      <div class="d-flex">
        <i class="bi bi-person"></i>
        <i class="bi bi-search"></i>
      </div>
    </div>
    <transition name="slideRight">
      <LeftMenu v-show="isLeftMenu" />
    </transition>
  </nav>
</template>

<script>
import LeftMenu from './LeftMenu.vue'
import { ref } from 'vue';
  export default {
    name: 'NavbarComp',
    components: {
      LeftMenu
    },
    setup() {
      const isLeftMenu = ref(false);

      return {
        isLeftMenu
      }
    }
  }
</script>

<style lang="scss" scoped>
  .bi {
    font-size: 1.5em;

    &.bi-person {
      margin-right: 0.5em;
    }
  }

  .slideRight-enter-active,
  .slideRight-leave-active {
    transition: all .2s;
  }

  .slideRight-enter-from,
  .slideRight-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }

  .slideRight-enter-to,
  .slideRight-leave-from {
    opacity: 1;
    transform: translateX(0);
  }

  .btn-toggle-menu {
    display: flex;
    flex-direction: column;
    padding: 1.25em 1em;
    overflow: hidden;
    .menu-icon {
      display: inline-block;
      width: 1em;
      height: 2px;
      background-color: var(--bs-white);
      position: relative;
      transition: all .5s ease-in-out;

      &::before, &::after {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-color: var(--bs-white);
        position: absolute;
      }

      &::before {
        top: 5px;
      }

      &::after {
        top: -5px;
      }
    }

    &.show .menu-icon {
      background-color: transparent;

      &::before, &::after {
        top: 0;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }

  .navbar {
    height: 5em;
    box-sizing: border-box;
  }
</style>