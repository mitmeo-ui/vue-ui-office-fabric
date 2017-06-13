<template>
  <div class="ms-CommandBar ms-CommandBar--navBar">
    <!--Side menu-->
    <div class="ms-CommandBar-sideCommands" ref="rightMenu">
    </div>
  
    <!--Main menu-->
    <div class="ms-CommandBar-mainArea" ref="leftMenu">
      <!--Search box-->
      <div class="ms-SearchBox ms-SearchBox--commandBar" v-if="search" ref="searchBox">
        <input class="ms-SearchBox-field" type="text" v-model="searchTerm" @keyup.enter="search(searchTerm)" @blur="clearSearch">
        <label class="ms-SearchBox-label">
          <i class="ms-SearchBox-icon ms-Icon ms-Icon--Search"></i>
          <span class="ms-SearchBox-text">Press Enter to search...</span>
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
        <div class="ms-CommandButton ms-SearchBox-filter ms-CommandButton--noLabel">
          <button class="ms-CommandButton-button">
            <span class="ms-CommandButton-icon">
              <i class="ms-Icon ms-Icon--Filter"></i>
            </span>
            <span class="ms-CommandButton-label"></span>
          </button>
        </div>
      </div>
      <!--End Search box-->
  
      <div :class="`ms-CommandButton ms-CommandButton--pivot ms-CommandButton--${item.position || 'left'}`" v-for="item in items">
        <a class="ms-CommandButton-button" @click="item.command ? item.command($event) : null">
          <span class="ms-CommandButton-icon ms-fontColor-themePrimary" v-if="item.icon">
            <i :class="$ui.getIconClass(item.icon)" aria-hidden="true"></i>
          </span>
          <span class="ms-CommandButton-label">{{item.text}}</span>
          <span class="ms-CommandButton-dropdownIcon" v-if="hasSubMenu(item)">
            <i class="ms-Icon ms-Icon--ChevronDown"></i>
          </span>
        </a>
        <ul :class="`ms-ContextualMenu ${hasIcons(item.subItems) ? 'ms-ContextualMenu--hasIcons' : ''}`" v-if="hasSubMenu(item)">
          <li :class="`ms-ContextualMenu-item ${sub.divider ? 'ms-ContextualMenu-item--divider' : ''}`" v-for="sub in item.subItems">
            <template v-if="!sub.divider">
              <a class="ms-ContextualMenu-link" @click="sub.command ? sub.command($event) : null">{{sub.text}}</a>
              <i :class="$ui.getIconClass(sub.icon)" v-if="sub.icon"></i>
            </template>
          </li>
        </ul>
      </div>
  
      <!--This block is required? Hey M$!-->
      <div class="ms-CommandButton ms-CommandBar-overflowButton ms-CommandButton--noLabel">
        <a class="ms-CommandButton-button">
          <span class="ms-CommandButton-icon">
            <i class="ms-Icon ms-Icon--More"></i>
          </span>
          <span class="ms-CommandButton-label"></span>
        </a>
        <ul class="ms-ContextualMenu is-opened">
          <li class="ms-ContextualMenu-item">
            <a class="ms-ContextualMenu-link"></a>
            <i class="ms-Icon"></i>
          </li>
        </ul>
      </div>
      <!--End M$-->
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'vue-ui-menu-bar',
  data() {
    return {
      searchTerm: '',
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
    icon: {
      type: String,
      default: null,
    },
    // router: {
    //   type: val => val instanceof Router,
    //   default: null,
    // },
  },
  mounted() {
    // Basically left and right menus have the same markup
    // So to avoid copy+paste, we render all on left menu first
    // Then move relevant items to the right menu
    const rightItems = this.$refs.leftMenu.querySelectorAll('.ms-CommandButton--right');
    const rightMenu = this.$refs.rightMenu;
    _.forEach(rightItems, (item) => {
      rightMenu.appendChild(item);
    });
    // fabric API to create the menu
    this.instance$ = new this.$ui.fabric['CommandBar'](this.$el);
  },
  methods: {
    hasIcons(items) {
      return _.find(items, item => item.icon);
    },
    hasSubMenu(item) {
      return item.subItems && item.subItems.length > 0;
    },
    clearSearch() {
      if (!this.searchTerm) return;
      this.searchTerm = '';
    },
  },
};
</script>

<style lang="scss">
.ms-ContextualMenu {
  .ms-ContextualMenu-item {
    i {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 40px;
      text-align: center;
    }
  }
}
</style>
