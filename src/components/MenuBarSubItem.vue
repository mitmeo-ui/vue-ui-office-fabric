<template>
  <li :class="`ms-ContextualMenu-item ${divider ? 'ms-ContextualMenu-item--divider' : ''}`">
    <template v-if="!divider">
      <a class="ms-ContextualMenu-link" @click="command ? command($event) : null" :title="toolTip || text">{{text}}</a>
      <i :class="icon" v-if="icon"></i>
    </template>
  </li>
</template>

<script>
import MenuBarItemMixins from './mixins/menu-item';

export default {
  name: 'vui-menubar-subitem',
  mixins: [
    MenuBarItemMixins,
  ],
  created() {
    this.$parent.$emit('subitem-added', this);
  },
};
</script>

<style lang="scss">
.ms-ContextualMenu-item {
  i {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    text-align: center;
  }
}
</style>
