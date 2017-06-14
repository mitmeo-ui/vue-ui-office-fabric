<template>
  <div :class="`ms-CommandButton ms-CommandButton--${text ? 'pivot' : 'noLabel'}`">
    <a class="ms-CommandButton-button" @click="!hasSubMenu() && command ? command($event) : null">
      <span class="ms-CommandButton-icon ms-fontColor-themePrimary" v-if="icon">
        <i :class="$ui.getIconClass(icon)" aria-hidden="true"></i>
      </span>
      <span class="ms-CommandButton-label">{{text}}</span>
      <span class="ms-CommandButton-dropdownIcon" v-if="hasSubMenu()">
        <i class="ms-Icon ms-Icon--ChevronDown"></i>
      </span>
    </a>
    <ul :class="`ms-ContextualMenu ${hasSubIcon() ? 'ms-ContextualMenu--hasIcons' : ''}`" v-if="hasSubMenu()">
      <slot></slot>
      <template v-for="sub in subItems">
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
  name: 'vui-menubar-item',
  props: {
    text: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    command: {
      type: Function,
      default: null,
    },
    subItems: {
      type: Array,
      default: null,
    },
  },
  components: {
    SubItem,
  },
  methods: {
    hasSubIcon() {
      // TODO: Check slots too
      return _.find(this.subItems, item => item.icon);
    },
    hasSubMenu() {
      return (this.subItems && this.subItems.length > 0)
        || (this.$slots.default && this.$slots.default.length > 0)
        || (this.$slots.after && this.$slots.default.after > 0);
    },
  },
};
</script>
