<template>
  <div :class="`ms-CommandButton ms-CommandButton--${text ? 'pivot' : 'noLabel'}`">
    <a class="ms-CommandButton-button" @click="!hasSubMenu && command ? command($event) : null" :title="toolTip || text">
      <span class="ms-CommandButton-icon ms-fontColor-themePrimary" v-if="icon">
        <i :class="iconClass" aria-hidden="true">{{iconText}}</i>
      </span>
      <span class="ms-CommandButton-label">{{text}}</span>
      <span class="ms-CommandButton-dropdownIcon" v-if="hasSubMenu">
        <i class="ms-Icon ms-Icon--ChevronDown"></i>
      </span>
    </a>
    <ul :class="`ms-ContextualMenu ${hasSubIcon ? 'ms-ContextualMenu--hasIcons' : ''}`" v-if="hasSubMenu">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import MenuBarItemMixins from './mixins/menu-item';

export default {
  name: 'vui-menubar-item',
  data() {
    return {
      hasSubIcon: false,
    };
  },
  mixins: [
    MenuBarItemMixins,
  ],
  created() {
    this.$on('subitem-added', (sub) => {
      this.hasSubIcon = sub.icon;
    });
  },
  computed: {
    hasSubMenu() {
      return this.$slots.default && this.$slots.default.length > 0;
    },
  },
};
</script>
