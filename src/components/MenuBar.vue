<template>
  <div class="ms-CommandBar ms-CommandBar--navBar">
    <slot></slot>
  </div>
</template>

<script>
// import { fabric } from '../';

export default {
  name: 'vui-menubar',
  mounted() {
    // fabric API to create the menu
    this.instance$ = new fabric.CommandBar(this.$el);
  },
};
</script>
