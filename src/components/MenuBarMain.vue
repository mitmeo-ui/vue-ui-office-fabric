<template>
  <div class="ms-CommandBar-mainArea">
    <search-box :search-placeholder="searchPlaceholder" :search="search" :icon="icon" v-if="search"></search-box>
    <slot></slot>
    <!--Fabric needs this to for submenu to be functional............-->
    <quirk-block></quirk-block>
  </div>
</template>

<script>
import SearchBox from './internals/MenuBarSearch';
import QuirkBlock from './internals/MenuBarQuirkBlock';

export default {
  name: 'vui-menubar-main',
  props: {
    search: {
      type: Function,
      default: null,
    },
    searchPlaceholder: {
      type: String,
      default: 'Press Enter to search...',
    },
    icon: {
      type: String,
      default: 'ms-Icon ms-Icon--Search',
    },
  },
  components: {
    SearchBox,
    QuirkBlock,
  },
};
</script>
