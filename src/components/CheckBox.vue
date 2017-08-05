<template>
  <div class="ms-CheckBox">
    <input type="checkbox" class="ms-CheckBox-input">
    <label role="checkbox" class="ms-CheckBox-field" :class="{ 'is-disabled': disabled}" @click="command ? command($event) : null">
      <span class="ms-Label"><slot ></slot></span>
    </label>
  </div>
</template>

<script>

  import { fabric } from '@';

  export default {
    name: 'vui-checkbox',
    props: {
      command: {
        type: Function,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    mounted() {
      // fabric API to create the Checkbox
      this.$checkbox = new fabric.CheckBox(this.$el);
    },
  };
</script>
