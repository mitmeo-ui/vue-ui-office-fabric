<template>
  <li :class="`ms-ContextualMenu-item ${item.divider ? 'ms-ContextualMenu-item--divider' : ''}`">
    <template v-if="!item.divider">
      <a class="ms-ContextualMenu-link" @click="item.command ? item.command($event) : null">{{item.text}}</a>
      <i :class="$ui.getIconClass(item.icon)" v-if="item.icon"></i>
    </template>
  </li>
</template>

<script>
export default {
  name: 'vui-menubar-subitem',
  props: {
    item: {
      type: Object,
      default: null,
    },
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
