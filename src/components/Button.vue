<template>
  <button :class="cssClass" :disabled="disabled">
    <span class="ms-Button-label">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import ButtonMixins from './mixins/button';

export default {
  name: 'vui-button',
  mixins: [
    ButtonMixins,
  ],
};
</script>
