<template>
  <div class="ms-CommandBar-sideCommands">
    <slot></slot>
    <template v-for="item in items">
      <menu-bar-item :text="item.text" :icon="item.icon" :command="item.command" :subItems="item.subItems"></menu-bar-item>
    </template>
    <slot name="after"></slot>
  </div>
</template>

<script>
import MenuBarItem from './MenuBarItem';

export default {
  name: 'vui-menubar-side',
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
