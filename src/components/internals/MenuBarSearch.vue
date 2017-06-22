<template>
  <div class="ms-SearchBox ms-SearchBox--commandBar">
    <input class="ms-SearchBox-field" type="text" v-model="searchTerm" @keyup.enter="search(searchTerm)" @blur="clearSearch">
    <label class="ms-SearchBox-label">
      <i :class="`ms-SearchBox-icon ${iconClass}`">{{iconText}}</i>
      <span class="ms-SearchBox-text">{{searchPlaceholder}}</span>
    </label>
    <div class="ms-CommandButton ms-SearchBox-clear ms-CommandButton--noLabel">
      <button class="ms-CommandButton-button">
        <span class="ms-CommandButton-icon">
          <i class="ms-Icon ms-Icon--Cancel"></i>
        </span>
        <span class="ms-CommandButton-label"></span>
      </button>
    </div>
    <div class="ms-CommandButton ms-SearchBox-exit ms-CommandButton--noLabel">
      <button class="ms-CommandButton-button">
        <span class="ms-CommandButton-icon">
          <i class="ms-Icon ms-Icon--ChromeBack"></i>
        </span>
        <span class="ms-CommandButton-label"></span>
      </button>
    </div>
  </div>
</template>

<script>
import MenuBarItemMixins from '@/components/mixins/menu-item';

export default {
  name: 'vue-ui-menu-bar-search',
  data() {
    return {
      searchTerm: '',
    };
  },
  mixins: [
    MenuBarItemMixins,
  ],
  props: {
    searchPlaceholder: {
      type: String,
      default: 'Press Enter to search',
    },
    search: {
      type: Function,
      default: null,
    },
    icon: {
      type: String,
      default: 'ms-Icon ms-Icon--Search',
    },
  },
  methods: {
    clearSearch() {
      if (!this.searchTerm) return;
      this.searchTerm = '';
    },
  },
};
</script>

<style>
@media only screen and (max-width: 639px) {
  .ms-SearchBox.ms-SearchBox--commandBar.is-collapsed.is-active .ms-SearchBox-clear {
    display: inline-block;
    right: 0;
  }
}
</style>
