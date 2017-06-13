<template>
  <div class="ms-CommandButton ms-CommandButton--pivot" v-if="(item)">
    <a class="ms-CommandButton-button" @click="!hasSubMenu(item) && item.command ? item.command($event) : null">
      <span class="ms-CommandButton-icon ms-fontColor-themePrimary" v-if="item.icon">
        <i :class="$ui.getIconClass(item.icon)" aria-hidden="true"></i>
      </span>
      <span class="ms-CommandButton-label">{{item.text}}</span>
      <span class="ms-CommandButton-dropdownIcon" v-if="hasSubMenu(item)">
        <i class="ms-Icon ms-Icon--ChevronDown"></i>
      </span>
    </a>
    <ul :class="`ms-ContextualMenu ${hasIcons(item.subItems) ? 'ms-ContextualMenu--hasIcons' : ''}`" v-if="hasSubMenu(item)">
      <slot></slot>
      <template v-for="sub in item.subItems">
        <sub-item :item="sub"></sub-item>
      </template>
      <slot name="after"></slot>
    </ul>
  </div>
</template>

<script>
import _ from 'lodash';
import SubItem from './MenuBarSubItem';

export default {
  name: 'vue-ui-menu-bar-item',
  data() {
    return {
    };
  },
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
  components: {
    SubItem,
  },
  methods: {
    hasIcons(items) {
      // TODO: Check slots too
      return _.find(items, item => item.icon);
    },
    hasSubMenu(item) {
      return (item.subItems && item.subItems.length > 0)
        || (this.$slots.default && this.$slots.default.length > 0)
        || (this.$slots.after && this.$slots.default.after > 0);
    },
  },
};
</script>
