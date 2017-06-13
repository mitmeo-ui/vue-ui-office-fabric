<template>
  <div class="ms-CommandBar ms-CommandBar--navBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'vue-ui-menu-bar',
  data() {
    return {
    };
  },
  mounted() {
    // fabric API to create the menu
    this.instance$ = new this.$ui.fabric['CommandBar'](this.$el);
  },
  methods: {
  },
};
</script>
