<template>
  <div class="ms-CommandBar ms-CommandBar--navBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vui-menubar',
  mounted() {
    // fabric API to create the menu
    this.instance$ = new this.$ui.fabric['CommandBar'](this.$el);
  },
};
</script>
