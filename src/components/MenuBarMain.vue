<template>
  <div class="ms-CommandBar-mainArea">
    <search-box :search-placeholder="searchPlaceholder" :search="search" v-if="search"></search-box>
    <slot></slot>
    <template v-for="item in items">
      <menu-bar-item :item="item"></menu-bar-item>
    </template>
    <slot name="after"></slot>
    <!--Fabric needs this to for submenu to be functional............-->
    <quirk-block></quirk-block>
  </div>
</template>

<script>
import SearchBox from './internals/MenuBarSearch';
import MenuBarItem from './MenuBarItem';
import QuirkBlock from './internals/MenuBarQuirkBlock';

export default {
  name: 'vui-menubar-main',
  data() {
    return {
    };
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
    search: {
      type: Function,
      default: null,
    },
    searchPlaceholder: {
      type: String,
      default: 'Press Enter to search...',
    },
  },
  components: {
    SearchBox,
    MenuBarItem,
    QuirkBlock,
  },
};
</script>
