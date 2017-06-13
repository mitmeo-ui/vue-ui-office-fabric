<template>
  <div class="ms-CommandBar-sideCommands">
    <slot></slot>
    <template v-for="item in items">
      <menu-bar-item :item="item"></menu-bar-item>
    </template>
    <slot name="after"></slot>
  </div>
</template>

<script>
import MenuBarItem from './MenuBarItem';

export default {
  name: 'vue-ui-menu-bar-side',
  data() {
    return {
    };
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  components: {
    MenuBarItem,
  },
};
</script>
