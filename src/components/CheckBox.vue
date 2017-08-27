<template>
  <div class="ms-CheckBox">
    <input type="checkbox" class="ms-CheckBox-input" @change="handleChange">
    <label role="checkbox" class="ms-CheckBox-field" :class="{ 'is-disabled': disabled}">
      <span class="ms-Label"><slot ></slot></span>
    </label>
  </div>
</template>

<script>

  import { fabric } from '@';

  export default {
    name: 'vui-checkbox',
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    mounted() {
      // fabric API to create the Checkbox
      this.$checkbox = new fabric.CheckBox(this.$el);
    },
    methods: {
      handleChange() {
        this.$emit('input', this.$checkbox.getValue());
      },
    },
  };
</script>
